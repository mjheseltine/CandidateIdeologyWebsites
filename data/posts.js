// Candidate Ideology Profiles — shared Democratic/Republican stimulus bank.
// Draft stimuli for interface testing; validate ideological strength before fielding.
const POSTS = [
  {
    "id": "DEM_POLICY_01",
    "party": "dem",
    "type": "policy",
    "topic": "education",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "I support increasing funding for public schools and making sure every child has access to a good education.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "DEM_POLICY_02",
    "party": "dem",
    "type": "policy",
    "topic": "healthcare",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "I support expanding access to affordable health insurance and protecting coverage for people with pre-existing conditions.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "DEM_POLICY_03",
    "party": "dem",
    "type": "policy",
    "topic": "taxes",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "I support asking the wealthiest households to pay more in taxes to help fund essential public services.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "DEM_POLICY_04",
    "party": "dem",
    "type": "policy",
    "topic": "climate",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "I support federal investment in clean energy to reduce emissions and create jobs.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "DEM_POLICY_05",
    "party": "dem",
    "type": "policy",
    "topic": "labor",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "I support raising the federal minimum wage so full-time work provides a better living.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "DEM_PARTISAN_01",
    "party": "dem",
    "type": "partisan",
    "topic": "party",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "I am proud to be a Democrat and to work alongside Democratic leaders.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "DEM_PARTISAN_02",
    "party": "dem",
    "type": "partisan",
    "topic": "party",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "Electing more Democrats to Congress is a priority for this campaign.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "DEM_PARTISAN_03",
    "party": "dem",
    "type": "partisan",
    "topic": "opposition",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "I disagree with Donald Trump and the direction he wants to take the country.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "DEM_PARTISAN_04",
    "party": "dem",
    "type": "partisan",
    "topic": "party",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "Our Democratic volunteers are the backbone of this campaign.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "DEM_PARTISAN_05",
    "party": "dem",
    "type": "partisan",
    "topic": "opposition",
    "ideology": "left",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "This election is an opportunity to challenge Republican leadership in Washington.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_01",
    "party": "dem",
    "type": "general",
    "topic": "town_hall",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "Thanks to everyone who came to our town hall. I appreciated hearing your questions and concerns.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_02",
    "party": "dem",
    "type": "general",
    "topic": "voting",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "Election Day is approaching. Please check your polling location and make a plan to vote.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_03",
    "party": "dem",
    "type": "general",
    "topic": "volunteering",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "Our team is knocking on doors this weekend. Sign up if you would like to volunteer.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_04",
    "party": "dem",
    "type": "general",
    "topic": "donation",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "Our next fundraising deadline is coming up. Every contribution helps our campaign reach more voters.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_05",
    "party": "dem",
    "type": "general",
    "topic": "community",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "It was wonderful meeting residents at the community festival. Thanks for stopping by.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "DEM_GENERAL_06",
    "party": "dem",
    "type": "general",
    "topic": "event",
    "author": "Alex Morgan",
    "handle": "@AlexMorgan",
    "verified": true,
    "timestamp": "7d",
    "likes": 247,
    "reposts": 44,
    "comments": 30,
    "text": "We will be at the county fair on Saturday afternoon. Come say hello and meet the campaign team.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_POLICY_01",
    "party": "rep",
    "type": "policy",
    "topic": "education",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "I support expanding school choice, including voucher programs, so parents have more options for their children.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "REP_POLICY_02",
    "party": "rep",
    "type": "policy",
    "topic": "healthcare",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "I support giving patients more choice in healthcare and reducing government rules that drive up costs.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "REP_POLICY_03",
    "party": "rep",
    "type": "policy",
    "topic": "taxes",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "I support lowering taxes on families and small businesses so they can keep more of what they earn.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "REP_POLICY_04",
    "party": "rep",
    "type": "policy",
    "topic": "climate",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "I support expanding domestic oil and gas production to keep energy affordable and reliable.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "REP_POLICY_05",
    "party": "rep",
    "type": "policy",
    "topic": "labor",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "I oppose a nationwide minimum-wage increase because local businesses need flexibility to set pay.",
    "commentList": [
      {
        "author": "Taylor R.",
        "text": "I would like to hear more details about how this would work."
      },
      {
        "author": "Jordan L.",
        "text": "This is an important issue for our community."
      }
    ]
  },
  {
    "id": "REP_PARTISAN_01",
    "party": "rep",
    "type": "partisan",
    "topic": "party",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "I am proud to be a Republican and to work alongside Republican leaders.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "REP_PARTISAN_02",
    "party": "rep",
    "type": "partisan",
    "topic": "party",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "Electing more Republicans to Congress is a priority for this campaign.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "REP_PARTISAN_03",
    "party": "rep",
    "type": "partisan",
    "topic": "opposition",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "I disagree with the Democratic Party and the direction its leaders want to take the country.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "REP_PARTISAN_04",
    "party": "rep",
    "type": "partisan",
    "topic": "party",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "Our Republican volunteers are the backbone of this campaign.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "REP_PARTISAN_05",
    "party": "rep",
    "type": "partisan",
    "topic": "opposition",
    "ideology": "right",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "This election is an opportunity to challenge Democratic leadership in Washington.",
    "commentList": [
      {
        "author": "Sam K.",
        "text": "I care about what candidates will actually do in office."
      },
      {
        "author": "Morgan P.",
        "text": "Thanks for sharing your position."
      }
    ]
  },
  {
    "id": "REP_GENERAL_01",
    "party": "rep",
    "type": "general",
    "topic": "town_hall",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "2d",
    "likes": 162,
    "reposts": 24,
    "comments": 15,
    "text": "Thanks to everyone who came to our town hall. I appreciated hearing your questions and concerns.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_GENERAL_02",
    "party": "rep",
    "type": "general",
    "topic": "voting",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "3d",
    "likes": 179,
    "reposts": 28,
    "comments": 18,
    "text": "Election Day is approaching. Please check your polling location and make a plan to vote.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_GENERAL_03",
    "party": "rep",
    "type": "general",
    "topic": "volunteering",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "4d",
    "likes": 196,
    "reposts": 32,
    "comments": 21,
    "text": "Our team is knocking on doors this weekend. Sign up if you would like to volunteer.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_GENERAL_04",
    "party": "rep",
    "type": "general",
    "topic": "donation",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "5d",
    "likes": 213,
    "reposts": 36,
    "comments": 24,
    "text": "Our next fundraising deadline is coming up. Every contribution helps our campaign reach more voters.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_GENERAL_05",
    "party": "rep",
    "type": "general",
    "topic": "community",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "6d",
    "likes": 230,
    "reposts": 40,
    "comments": 27,
    "text": "It was wonderful meeting residents at the community festival. Thanks for stopping by.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  },
  {
    "id": "REP_GENERAL_06",
    "party": "rep",
    "type": "general",
    "topic": "event",
    "author": "Jordan Ellis",
    "handle": "@JordanEllis",
    "verified": true,
    "timestamp": "7d",
    "likes": 247,
    "reposts": 44,
    "comments": 30,
    "text": "We will be at the county fair on Saturday afternoon. Come say hello and meet the campaign team.",
    "commentList": [
      {
        "author": "Casey M.",
        "text": "Thanks for the update!"
      },
      {
        "author": "Riley J.",
        "text": "Hope to see the team there."
      }
    ]
  }
];

function getPosts() { return POSTS; }
function getPost(id) { return POSTS.find(p => String(p.id) === String(id)); }
function getPostsByType(type) { return POSTS.filter(p => p.type === type); }
function getPostsByParty(party) { return POSTS.filter(p => p.party === party); }
