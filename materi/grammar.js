const GRAMMAR_LEVELS = [
  {
    code: "A1",
    label: "A1 · Beginner",
    explanation: [
      {
        title: "The verb \"to be\"",
        body: "Use am with I, is with he/she/it, are with you/we/they. Example: I am a student. She is happy. They are friends."
      },
      {
        title: "Plural nouns",
        body: "Add -s for most nouns (cat → cats). Add -es after s, x, ch, sh (box → boxes, watch → watches)."
      },
      {
        title: "Basic word order",
        body: "English sentences follow Subject + Verb + Object. Example: I like tea. (not: Like I tea.)"
      }
    ],
    practice: [
      { q: "She ___ my sister.", options: ["is", "are", "am", "be"], correct: 0 },
      { q: "They ___ from Indonesia.", options: ["is", "am", "are", "be"], correct: 2 },
      { q: "I have two ___.", options: ["box", "boxes", "boxs", "boxe"], correct: 1 },
      { q: "Choose the correct word order.", options: ["I tea like", "Like I tea", "I like tea", "Tea I like"], correct: 2 },
      { q: "We ___ students.", options: ["is", "am", "are", "be"], correct: 2 }
    ]
  },
  {
    code: "A2",
    label: "A2 · Elementary",
    explanation: [
      {
        title: "Past simple",
        body: "Regular verbs add -ed (walk → walked). Irregular verbs change form (go → went, see → saw)."
      },
      {
        title: "Comparatives",
        body: "Short adjectives add -er (big → bigger). Long adjectives use more (expensive → more expensive). Irregular: good → better, bad → worse."
      },
      {
        title: "Countable vs uncountable nouns",
        body: "Countable nouns use a/an/many (an apple, many apples). Uncountable nouns use some/much (some water, much time)."
      }
    ],
    practice: [
      { q: "Yesterday, I ___ to the market.", options: ["go", "goes", "went", "going"], correct: 2 },
      { q: "This bag is ___ than that one.", options: ["expensive", "more expensive", "expensiver", "most expensive"], correct: 1 },
      { q: "She ___ her homework last night.", options: ["finish", "finishes", "finished", "finishing"], correct: 2 },
      { q: "How ___ water do you need?", options: ["many", "much", "some", "a"], correct: 1 },
      { q: "This is the ___ book I've ever read.", options: ["gooder", "best", "better", "goodest"], correct: 1 }
    ]
  },
  {
    code: "B1",
    label: "B1 · Intermediate",
    explanation: [
      {
        title: "Present perfect vs. past simple",
        body: "Present perfect (have/has + past participle) is for experiences or unfinished time: I have visited Bali twice. Past simple is for a finished, specific time: I visited Bali in 2019."
      },
      {
        title: "First conditional",
        body: "If + present simple, will + base verb — for real future possibilities: If it rains, we will stay home."
      },
      {
        title: "Modals of obligation",
        body: "Must = strong, personal obligation. Have to = strong, external rule. Should = advice, not obligation."
      }
    ],
    practice: [
      { q: "I have never ___ sushi before.", options: ["eat", "ate", "eaten", "eating"], correct: 2 },
      { q: "She ___ to Japan last year.", options: ["has gone", "went", "has go", "go"], correct: 1 },
      { q: "If it rains tomorrow, we ___ the picnic.", options: ["cancel", "will cancel", "cancelled", "canceling"], correct: 1 },
      { q: "You ___ wear a seatbelt — it's the law.", options: ["should", "must", "could", "might"], correct: 1 },
      { q: "I think you ___ apologize, but it's up to you.", options: ["must", "have to", "should", "will"], correct: 2 }
    ]
  },
  {
    code: "B2",
    label: "B2 · Upper Intermediate",
    explanation: [
      {
        title: "Second conditional",
        body: "If + past simple, would + base verb — for unreal or hypothetical present situations: If I won the lottery, I would travel the world."
      },
      {
        title: "Passive voice",
        body: "The object of an active sentence becomes the subject: be + past participle. Example: The cake was baked by my mother."
      },
      {
        title: "Reported speech",
        body: "Tenses usually shift back one step. \"I am tired,\" she said → She said she was tired."
      }
    ],
    practice: [
      { q: "If I ___ you, I would apologize.", options: ["am", "was", "were", "be"], correct: 2 },
      { q: "The window ___ by the storm last night.", options: ["broke", "was broken", "has broken", "breaks"], correct: 1 },
      { q: "She said she ___ tired.", options: ["is", "was", "were", "be"], correct: 1 },
      { q: "If they ___ more time, they would finish the project.", options: ["have", "had", "has", "having"], correct: 1 },
      { q: "This bridge ___ in 1932.", options: ["built", "was built", "has built", "builds"], correct: 1 }
    ]
  },
  {
    code: "C1",
    label: "C1 · Advanced",
    explanation: [
      {
        title: "Third conditional",
        body: "If + past perfect, would have + past participle — for unreal past situations: If I had studied, I would have passed."
      },
      {
        title: "Inversion for emphasis",
        body: "Negative adverbials at the start of a sentence invert the subject and auxiliary: Never have I seen such chaos. Rarely does she complain."
      },
      {
        title: "Cleft sentences",
        body: "Used to emphasise part of a sentence: It was John who broke the vase. What I need is more time."
      }
    ],
    practice: [
      { q: "If she ___ earlier, she wouldn't have missed the train.", options: ["left", "had left", "would leave", "has left"], correct: 1 },
      { q: "Rarely ___ such dedication.", options: ["I have seen", "have I seen", "I seen", "seen I have"], correct: 1 },
      { q: "___ was John who solved the problem.", options: ["It", "This", "That", "There"], correct: 0 },
      { q: "Not until he apologized ___ she forgive him.", options: ["did", "does", "had", "was"], correct: 0 },
      { q: "If we had known, we ___ differently.", options: ["would act", "would have acted", "will act", "acted"], correct: 1 }
    ]
  },
  {
    code: "C2",
    label: "C2 · Proficiency",
    explanation: [
      {
        title: "The subjunctive mood",
        body: "After verbs/adjectives like suggest, recommend, essential, vital, insist, use the base form regardless of subject: It is essential that he arrive on time."
      },
      {
        title: "Modals of past speculation",
        body: "Must have = near-certainty. Might/could have = possibility. Should/ought to have = regret or criticism about the past."
      },
      {
        title: "Hedging language",
        body: "Academic and formal English often softens claims: arguably, it could be argued that, to a certain extent."
      }
    ],
    practice: [
      { q: "It is vital that she ___ informed immediately.", options: ["is", "be", "was", "being"], correct: 1 },
      { q: "He's not answering — he ___ have left already.", options: ["should", "must", "could", "would"], correct: 1 },
      { q: "You ___ told me you were coming — I would have prepared dinner.", options: ["should have", "must have", "could", "would"], correct: 0 },
      { q: "The committee recommended that the policy ___ revised.", options: ["is", "be", "was", "being"], correct: 1 },
      { q: "___, the results suggest a correlation, not causation.", options: ["Arguably", "Argue", "Argument", "Argues"], correct: 0 }
    ]
  }
];

let currentGrammarLevelIndex = 0;

function renderGrammarLevelTabs() {
  const container = document.getElementById("level-tabs");
  if (!container) return;
  container.innerHTML = "";
  GRAMMAR_LEVELS.forEach(function (level, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = level.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentGrammarLevelIndex));
    btn.addEventListener("click", function () {
      currentGrammarLevelIndex = index;
      renderGrammarLevelTabs();
      renderExplanation();
      renderPractice();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("level-heading");
  if (heading) heading.textContent = GRAMMAR_LEVELS[currentGrammarLevelIndex].label;
}

function renderExplanation() {
  const level = GRAMMAR_LEVELS[currentGrammarLevelIndex];
  const container = document.getElementById("explanation-container");
  if (!container) return;
  container.innerHTML = "";

  level.explanation.forEach(function (item) {
    const block = document.createElement("div");
    block.className = "explanation-block";

    const title = document.createElement("h3");
    title.textContent = item.title;
    block.appendChild(title);

    const body = document.createElement("p");
    body.textContent = item.body;
    block.appendChild(body);

    container.appendChild(block);
  });
}

function renderPractice() {
  const level = GRAMMAR_LEVELS[currentGrammarLevelIndex];
  const questionsEl = document.getElementById("questions-container");
  if (!questionsEl) return;
  questionsEl.innerHTML = "";

  level.practice.forEach(function (question, qIndex) {
    const card = document.createElement("div");
    card.className = "question-card";

    const qText = document.createElement("p");
    qText.className = "question-text";
    qText.textContent = (qIndex + 1) + ". " + question.q;
    card.appendChild(qText);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "question-options";

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.id = "grammar-feedback-" + qIndex;

    question.options.forEach(function (optionText, oIndex) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = optionText;
      btn.addEventListener("click", function () {
        const buttons = optionsWrap.querySelectorAll(".option-btn");
        buttons.forEach(function (b) { b.classList.remove("correct", "incorrect"); });
        if (oIndex === question.correct) {
          btn.classList.add("correct");
          setGrammarFeedback(feedback.id, "Correct!", "correct");
        } else {
          btn.classList.add("incorrect");
          buttons[question.correct].classList.add("correct");
          setGrammarFeedback(feedback.id, "Not quite — look at the highlighted answer.", "incorrect");
        }
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
    card.appendChild(feedback);
    questionsEl.appendChild(card);
  });
}

function setGrammarFeedback(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = "feedback" + (type ? " " + type : "");
}

function initGrammarPage() {
  if (!document.getElementById("level-tabs")) return;
  renderGrammarLevelTabs();
  renderExplanation();
  renderPractice();
}

window.addEventListener("load", initGrammarPage);
