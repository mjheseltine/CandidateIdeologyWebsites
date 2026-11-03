/* EXAMPLE ONLY: Paste the body of this script into the Qualtrics iframe question's JavaScript editor.
   Change the GitHub Pages origin and ensure Embedded Data fields are declared in Survey Flow.
   This listener must run in Qualtrics, NOT on GitHub Pages. */
Qualtrics.SurveyEngine.addOnReady(function () {
  const q = this;
  const iframe = document.querySelector('iframe#candidateWebsiteFrame');
  if (!iframe) return;
  const websiteOrigin = 'https://YOUR-USERNAME.github.io';
  let events = [];
  let summary = null;
  const onMessage = (e) => {
    if (e.origin !== websiteOrigin || e.source !== iframe.contentWindow || !e.data) return;
    if (e.data.type === 'CANDIDATE_EXPERIMENT_EVENT') {
      events.push(e.data);
      Qualtrics.SurveyEngine.setEmbeddedData('websiteCondition', e.data.condition);
      Qualtrics.SurveyEngine.setEmbeddedData('websiteParty', e.data.party);
      Qualtrics.SurveyEngine.setEmbeddedData('websiteEventLog', JSON.stringify(events));
    }
    if (e.data.type === 'CANDIDATE_EXPERIMENT_SUMMARY') {
      summary = e.data;
      Qualtrics.SurveyEngine.setEmbeddedData('websiteSummary', JSON.stringify(summary));
    }
  };
  window.addEventListener('message', onMessage);
  q.addOnPageSubmit(function () {
    // Summary requests are asynchronous. Keep incremental events saved as backup.
    Qualtrics.SurveyEngine.setEmbeddedData('websiteEventLog', JSON.stringify(events));
    Qualtrics.SurveyEngine.setEmbeddedData('websiteCondition', '${e://Field/condition}');
    Qualtrics.SurveyEngine.setEmbeddedData('websiteParty', '${e://Field/party}');
    if (summary) Qualtrics.SurveyEngine.setEmbeddedData('websiteSummary', JSON.stringify(summary));
  });
  q.addOnUnload(function () { window.removeEventListener('message', onMessage); });
});
