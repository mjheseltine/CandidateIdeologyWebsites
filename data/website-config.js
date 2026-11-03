/* Draft stimuli: not validated for ideological strength. */
const WEBSITE_CONFIG = Object.freeze({
  version: 'website-party-v1.0',
  candidates: {
    dem: {name:'Alex Morgan', party:'Democrat', office:'U.S. Congress', location:'California', avatar:'images/candidate_avatar_clean.jpg', banner:'images/campaign_banner.jpg', campaign:'Alex Morgan for Congress'},
    rep: {name:'Jordan Ellis', party:'Republican', office:'U.S. Congress', location:'California', avatar:'images/republican_avatar_placeholder.svg', banner:'images/republican_banner.svg', campaign:'Jordan Ellis for Congress'}
  },
  biographies: {
    dem: {
      policy: {eyebrow:'MEET ALEX',heading:'Focused on solutions for families',paragraphs:[
        'Alex Morgan is running for Congress to strengthen public schools, expand access to affordable health insurance, and make it easier for working families to get ahead.',
        'Alex supports investments in clean energy, higher wages for workers, and policies that give more people an opportunity to succeed.'
      ]},
      partisan: {eyebrow:'MEET ALEX',heading:'Proud to stand with Democrats',paragraphs:[
        'Alex Morgan is a proud Democrat running for Congress. Alex believes the Democratic Party can deliver the leadership our communities need and is committed to helping Democrats win elections.',
        'Alex will stand with fellow Democrats, challenge Republican leadership, and work to strengthen the Democratic coalition at home and in Washington.'
      ]},
      general: {eyebrow:'MEET ALEX',heading:'A campaign built around community',paragraphs:[
        'Alex Morgan is running for Congress after years of listening to neighbors, meeting families, and working with people across California. Alex believes good representation begins with showing up.',
        'The campaign brings together volunteers and residents who want a responsive representative. Alex looks forward to hearing from voters at local events.'
      ]}
    },
    rep: {
      policy: {eyebrow:'MEET JORDAN',heading:'Focused on solutions for families',paragraphs:[
        'Jordan Ellis is running for Congress to expand educational choices for parents, reduce taxes on families and small businesses, and make it easier for people to get ahead.',
        'Jordan supports reducing unnecessary regulation, strengthening border security, and policies that give communities greater control over local decisions.'
      ]},
      partisan: {eyebrow:'MEET JORDAN',heading:'Proud to stand with Republicans',paragraphs:[
        'Jordan Ellis is a proud Republican running for Congress. Jordan believes the Republican Party can deliver the leadership our communities need and is committed to helping Republicans win elections.',
        'Jordan will stand with fellow Republicans, challenge Democratic leadership, and work to strengthen the Republican coalition at home and in Washington.'
      ]},
      general: {eyebrow:'MEET JORDAN',heading:'A campaign built around community',paragraphs:[
        'Jordan Ellis is running for Congress after years of listening to neighbors, meeting families, and working with people across California. Jordan believes good representation begins with showing up.',
        'The campaign brings together volunteers and residents who want a responsive representative. Jordan looks forward to hearing from voters at local events.'
      ]}
    }
  }
});
