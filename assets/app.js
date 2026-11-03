(function(){
  'use strict';
  const params = new URLSearchParams(location.search);
  const condition = params.get('condition') || 'policy';
  const party = params.get('party') || 'dem';
  const candidate = WEBSITE_CONFIG.candidates[party];
  const allowed = ['policy','partisan','general'];
  const updates = document.getElementById('updateList');
  if (!allowed.includes(condition) || !candidate) { updates.textContent = 'Invalid URL. Use ?party=dem|rep&condition=policy|partisan|general.'; return; }
  const feed = FEED_GENERATOR.selectFeed(condition, POSTS, party);
  const bio = WEBSITE_CONFIG.biographies[party][condition];
  const startedAt = Date.now();
  const events = [];
  const viewed = new Set();
  const sessionId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : 'session-'+Date.now();
  const parentOrigin = params.get('parentOrigin'); // Set to your actual Qualtrics survey origin when embedding.
  const targetOrigin = parentOrigin && /^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(parentOrigin) ? parentOrigin : null;
  function emit(event,extra={}){
    const payload = {type:'CANDIDATE_EXPERIMENT_EVENT',platform:'website',event,condition,party,version:WEBSITE_CONFIG.version,sessionId,elapsedMs:Date.now()-startedAt, ...extra};
    events.push(payload);
    if (window.parent !== window && targetOrigin) window.parent.postMessage(payload,targetOrigin);
  }
  document.body.dataset.party = party;
  document.documentElement.style.setProperty('--candidate-banner', 'url("'+candidate.banner+'")');
  document.title = candidate.campaign + ' | Campaign';
  document.querySelector('.brand').setAttribute('aria-label', candidate.campaign+' home');
  document.getElementById('brandName').textContent = candidate.name.toUpperCase();
  document.getElementById('heroCandidateName').textContent = candidate.campaign.toUpperCase();
  document.getElementById('quickName').textContent = candidate.name;
  document.getElementById('aboutName').textContent = candidate.name;
  document.getElementById('footerCampaign').textContent = candidate.campaign;
  for (const id of ['heroAvatar','aboutAvatar']) { const img=document.getElementById(id); img.src=candidate.avatar; img.alt='Portrait of hypothetical candidate '+candidate.name; }
  document.getElementById('bioEyebrow').textContent = bio.eyebrow;
  document.getElementById('bioHeading').textContent = bio.heading;
  const bioBody = document.getElementById('bioBody');
  bio.paragraphs.forEach(t=>{const p=document.createElement('p');p.textContent=t;bioBody.appendChild(p)});
  const sequence = feed.posts.map(p=>p.id);
  feed.posts.forEach((post,index)=>{
    const card=document.createElement('article');card.className='update';card.dataset.postId=post.id;
    const meta=document.createElement('div');meta.className='meta';meta.textContent='Campaign statement · Update '+(index+1);
    const h=document.createElement('h3');h.textContent=post.topic ? post.topic.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) : 'Campaign update';
    const p=document.createElement('p');p.className='excerpt';p.textContent=post.text;
    const button=document.createElement('button');button.className='read-more';button.type='button';button.textContent='Read statement +';button.setAttribute('aria-expanded','false');
    const detail=document.createElement('div');detail.className='detail';detail.hidden=true;
    const d=document.createElement('p');d.textContent='Statement from '+candidate.campaign+'.';detail.appendChild(d);
    button.addEventListener('click',()=>{const open=detail.hidden;detail.hidden=!open;button.textContent=open?'Close statement −':'Read statement +';button.setAttribute('aria-expanded',String(open));emit('statement_toggle',{postId:post.id,postType:post.type,open})});
    card.append(meta,h,p,button,detail);updates.appendChild(card);
  });
  emit('session_start',{postSequence:sequence,counts:feed.counts,bioCondition:condition,party});
  if ('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting && e.intersectionRatio>=.5){const id=e.target.dataset.postId;if(!viewed.has(id)){viewed.add(id);const post=feed.posts.find(p=>p.id===id);emit('post_view',{postId:id,postType:post.type,position:sequence.indexOf(id)+1});observer.unobserve(e.target)}}})},{threshold:[.5]});
    updates.querySelectorAll('.update').forEach(el=>observer.observe(el));
  }
  document.getElementById('volunteerButton').addEventListener('click',()=>{document.getElementById('interestNotice').textContent='Thanks for your interest. This is a demonstration campaign website; no information has been submitted.';emit('volunteer_click')});
  document.getElementById('donateTop').addEventListener('click',()=>{document.getElementById('interestNotice').textContent='This is a demonstration campaign. Donations are not accepted.';document.getElementById('get-involved').scrollIntoView({behavior:'smooth'});emit('donate_click')});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>emit('navigation_click',{destination:a.getAttribute('href')})));
  let lastScroll=0;
  window.addEventListener('scroll',()=>{const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);const pct=Math.min(100,Math.round(scrollY/max*100));if(pct>=lastScroll+25){lastScroll=Math.floor(pct/25)*25;emit('scroll_depth',{percent:lastScroll})}},{passive:true});
  window.addEventListener('message',e=>{
    if(!targetOrigin || e.origin!==targetOrigin || e.source!==window.parent) return;
    if(e.data && e.data.type==='CANDIDATE_EXPERIMENT_REQUEST_SUMMARY'){
      window.parent.postMessage({type:'CANDIDATE_EXPERIMENT_SUMMARY',platform:'website',condition,party,version:WEBSITE_CONFIG.version,sessionId,elapsedMs:Date.now()-startedAt,postSequence:sequence,counts:feed.counts,viewedPostIds:[...viewed],events},targetOrigin);
    }
  });
  window.CANDIDATE_WEBSITE_DEBUG={condition,party,sequence,counts:feed.counts,events};
})();
