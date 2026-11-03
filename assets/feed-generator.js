// Replace assets/feed-generator.js with this version for party filtering.
(function(root) {
  "use strict";
  const FEED_VERSION = "social-party-v1";
  const TEMPLATES = Object.freeze({
    policy: ["policy","general","policy","partisan","policy","general","policy","partisan","policy","general"],
    partisan: ["partisan","general","partisan","policy","partisan","general","partisan","policy","partisan","general"],
    general: ["general","policy","general","partisan","general","general","policy","general","partisan","general"]
  });
  function selectFeed(condition, bank, party) {
    if (!Object.prototype.hasOwnProperty.call(TEMPLATES, condition)) throw new Error("Invalid condition: " + condition);
    if (!["dem","rep"].includes(party)) throw new Error("Invalid party: " + party);
    if (!Array.isArray(bank)) throw new Error("Post bank unavailable");
    const pool = {policy:[], partisan:[], general:[]};
    const ids = new Set();
    bank.forEach(p => {
      if (ids.has(String(p.id))) throw new Error("Duplicate post ID: " + p.id);
      ids.add(String(p.id));
      if (p.party === party && pool[p.type]) pool[p.type].push(p);
    });
    const cursors = {policy:0, partisan:0, general:0};
    const selected = TEMPLATES[condition].map(type => {
      const post = pool[type][cursors[type]++];
      if (!post) throw new Error("Insufficient " + party + " " + type + " posts");
      return post;
    });
    return {condition,party,version:FEED_VERSION,posts:selected,sequence:selected.map(p=>p.id),counts:{...cursors}};
  }
  root.FEED_GENERATOR = Object.freeze({selectFeed,TEMPLATES,FEED_VERSION});
})(typeof window !== "undefined" ? window : globalThis);
