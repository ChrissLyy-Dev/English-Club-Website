const READING_LEVELS = [
  {
    code: "A1",
    label: "A1 · Beginner",
    wordArrange: [
      "I like cats.",
      "She is happy.",
      "We go to school.",
      "This is my dog."
    ],
    passage: {
      title: "My Day",
      text: "I wake up at seven. I eat breakfast with my family. Then I go to school by bus. I do not walk to school.",
      questions: [
        {
          q: "How does the writer go to school?",
          options: ["By walking", "By bus", "By bike", "By car"],
          correct: 1
        },
        {
          q: "What does the writer do first in the morning?",
          options: ["Eat breakfast", "Go to school", "Wake up", "Take the bus"],
          correct: 2
        },
        {
          q: "Does the writer walk to school?",
          options: ["Yes, every day", "No, never", "Yes, sometimes", "The text does not say"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "A2",
    label: "A2 · Elementary",
    wordArrange: [
      "Yesterday I visited my grandmother.",
      "He was not at home last night.",
      "We are going to the market tomorrow.",
      "My sister can swim very well."
    ],
    passage: {
      title: "A Trip to the Market",
      text: "Last Saturday, Rina went to the market with her mother. They bought vegetables, but they did not buy any fruit because it was too expensive. Rina wanted to buy mangoes, but her mother said no.",
      questions: [
        {
          q: "What did Rina and her mother buy?",
          options: ["Fruit only", "Vegetables only", "Both vegetables and fruit", "Nothing"],
          correct: 1
        },
        {
          q: "Why didn't they buy fruit?",
          options: ["They did not like fruit", "The fruit was too expensive", "The market had no fruit", "Rina did not want fruit"],
          correct: 1
        },
        {
          q: "Who wanted to buy mangoes?",
          options: ["Rina's mother", "Rina", "Both of them", "Neither of them"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "B1",
    label: "B1 · Intermediate",
    wordArrange: [
      "Although it was raining, we decided to go outside.",
      "She has been studying English for three years.",
      "The movie that we watched last night was boring.",
      "If I have time tomorrow, I will call you."
    ],
    passage: {
      title: "The New Café",
      text: "A new café opened near my house last month. Many people say the coffee is excellent, but I think it is only average. However, I keep going back because the staff are friendly and the place is quiet enough to study in.",
      questions: [
        {
          q: "What does the writer think about the coffee?",
          options: ["It is excellent", "It is average", "It is terrible", "The writer did not try it"],
          correct: 1
        },
        {
          q: "Why does the writer keep going back to the café?",
          options: ["Because the coffee is excellent", "Because of the friendly staff and quiet atmosphere", "Because it is the only café nearby", "Because it is cheap"],
          correct: 1
        },
        {
          q: "What do “many people” think about the coffee?",
          options: ["They think it's average", "They think it's excellent", "They never mention the coffee", "They think it's terrible"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "B2",
    label: "B2 · Upper Intermediate",
    wordArrange: [
      "Despite having little experience, she was offered the job.",
      "The report should have been finished by now.",
      "Not only did he apologize, but he also fixed the mistake.",
      "Had I known about the traffic, I would have left earlier."
    ],
    passage: {
      title: "Working From Home",
      text: "Working from home is often described as more flexible, and in many ways it is. Yet flexibility does not always mean less work; some employees report working longer hours simply because the line between work and personal time has blurred. It is not that remote work is worse than office work — it simply demands a different kind of discipline.",
      questions: [
        {
          q: "According to the passage, does working from home always mean less work?",
          options: ["Yes, always", "No, not always", "Yes, but only for managers", "The passage does not mention this"],
          correct: 1
        },
        {
          q: "Why do some employees work longer hours at home?",
          options: ["Their bosses require it", "The boundary between work and personal time is unclear", "They are paid more for overtime", "They have no other tasks"],
          correct: 1
        },
        {
          q: "What is the writer's overall opinion of remote work?",
          options: ["It is worse than office work", "It is better than office work in every way", "It is not necessarily better or worse, just different", "It should be banned"],
          correct: 2
        }
      ]
    }
  },
  {
    code: "C1",
    label: "C1 · Advanced",
    wordArrange: [
      "Rarely have I encountered an argument so thoroughly unconvincing.",
      "The committee's decision, controversial as it was, went unchallenged.",
      "Not until the results were published did anyone question the method.",
      "It was precisely her reluctance that made the offer so appealing."
    ],
    passage: {
      title: "The Illusion of Choice",
      text: "Modern consumers are often told they have more choice than ever before, yet an abundance of options does not necessarily translate into meaningful freedom. When faced with dozens of nearly identical products, many people default to the same brand they always buy — not out of loyalty, but out of fatigue. The choice, in other words, is technically present but rarely exercised.",
      questions: [
        {
          q: "According to the passage, why do people often buy the same brand?",
          options: ["Because it is genuinely the best option", "Because they are loyal to that brand", "Because choosing among many similar options is tiring", "Because other options are unavailable"],
          correct: 2
        },
        {
          q: "What is the writer's main point?",
          options: ["Consumers have too few choices today", "Having more options does not always mean more meaningful freedom", "Brand loyalty is increasing", "Modern products are all identical"],
          correct: 1
        },
        {
          q: "The phrase “technically present but rarely exercised” suggests that choice is…",
          options: ["Completely absent", "Available in theory but seldom used in practice", "Only for wealthy consumers", "Increasing every year"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "C2",
    label: "C2 · Proficiency",
    wordArrange: [
      "Little did the board anticipate the backlash their decision would provoke.",
      "So subtle was the shift in tone that few listeners noticed it at all.",
      "Were it not for her intervention, the negotiations would have collapsed.",
      "What the critics dismissed as naïve later proved remarkably prescient."
    ],
    passage: {
      title: "The Cost of Certainty",
      text: "There is a peculiar comfort in certainty, even when that certainty is misplaced. Experts who hedge their predictions with caveats are often perceived as less credible than those who speak with unwavering confidence — regardless of who turns out to be right. This paradox rewards conviction over accuracy, and it is not confined to any single field; it recurs wherever people must choose whom to trust under uncertainty.",
      questions: [
        {
          q: "What paradox does the writer describe?",
          options: ["Confident experts are always more accurate", "People trust confident experts more, even when they are less accurate", "Cautious experts are never trusted", "Uncertainty is always rewarded"],
          correct: 1
        },
        {
          q: "Why are hedging experts perceived as less credible?",
          options: ["Because they are usually wrong", "Because confidence is mistaken for competence", "Because they use difficult vocabulary", "Because they change their minds often"],
          correct: 1
        },
        {
          q: "The writer suggests this pattern is…",
          options: ["Limited to science", "Found only in politics", "Present across many different fields", "A recent phenomenon"],
          correct: 2
        }
      ]
    }
  }
];

let currentLevelIndex = 0;
let currentSentenceIndex = 0;
let bankTokens = [];
let answerTokens = [];

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

function renderLevelTabs() {
  const container = document.getElementById("level-tabs");
  if (!container) return;
  container.innerHTML = "";
  READING_LEVELS.forEach(function (level, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = level.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentLevelIndex));
    btn.addEventListener("click", function () {
      currentLevelIndex = index;
      currentSentenceIndex = 0;
      renderLevelTabs();
      renderWordArrange();
      renderPassage();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("level-heading");
  if (heading) heading.textContent = READING_LEVELS[currentLevelIndex].label;
}

function renderWordArrange() {
  const level = READING_LEVELS[currentLevelIndex];
  const sentence = level.wordArrange[currentSentenceIndex];
  bankTokens = shuffle(sentence.split(" ")).map(function (word, i) {
    return { word: word, id: level.code + "-" + currentSentenceIndex + "-" + i + "-" + word };
  });
  answerTokens = [];
  renderWordTiles();
  setFeedback("word-feedback", "", "");
}

function renderWordTiles() {
  const bankEl = document.getElementById("word-bank");
  const answerEl = document.getElementById("word-answer");
  if (!bankEl || !answerEl) return;

  bankEl.innerHTML = "";
  bankTokens.forEach(function (token) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word-tile";
    btn.textContent = token.word;
    btn.addEventListener("click", function () {
      bankTokens = bankTokens.filter(function (t) { return t.id !== token.id; });
      answerTokens.push(token);
      renderWordTiles();
    });
    bankEl.appendChild(btn);
  });

  answerEl.innerHTML = "";
  if (answerTokens.length === 0) {
    const hint = document.createElement("span");
    hint.className = "word-answer-hint";
    hint.textContent = "Click words below to build your sentence here.";
    answerEl.appendChild(hint);
  }
  answerTokens.forEach(function (token) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word-tile word-tile-placed";
    btn.textContent = token.word;
    btn.addEventListener("click", function () {
      answerTokens = answerTokens.filter(function (t) { return t.id !== token.id; });
      bankTokens.push(token);
      renderWordTiles();
    });
    answerEl.appendChild(btn);
  });
}

function setFeedback(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = "feedback" + (type ? " " + type : "");
}

function checkWordArrange() {
  const level = READING_LEVELS[currentLevelIndex];
  const target = level.wordArrange[currentSentenceIndex];
  const built = answerTokens.map(function (t) { return t.word; }).join(" ");
  if (built === target) {
    setFeedback("word-feedback", "Correct! Well done.", "correct");
  } else {
    setFeedback("word-feedback", "Not quite right. Try again.", "incorrect");
  }
}

function nextSentence() {
  const level = READING_LEVELS[currentLevelIndex];
  currentSentenceIndex = (currentSentenceIndex + 1) % level.wordArrange.length;
  renderWordArrange();
}

function renderPassage() {
  const level = READING_LEVELS[currentLevelIndex];
  const titleEl = document.getElementById("passage-title");
  const textEl = document.getElementById("passage-text");
  const questionsEl = document.getElementById("questions-container");
  if (!titleEl || !textEl || !questionsEl) return;

  titleEl.textContent = level.passage.title;
  textEl.textContent = level.passage.text;
  questionsEl.innerHTML = "";

  level.passage.questions.forEach(function (question, qIndex) {
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
    feedback.id = "question-feedback-" + qIndex;

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
          setFeedback(feedback.id, "Correct!", "correct");
        } else {
          btn.classList.add("incorrect");
          buttons[question.correct].classList.add("correct");
          setFeedback(feedback.id, "Not quite — look at the highlighted answer.", "incorrect");
        }
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
    card.appendChild(feedback);
    questionsEl.appendChild(card);
  });
}

function initReadingPage() {
  if (!document.getElementById("level-tabs")) return;

  renderLevelTabs();
  renderWordArrange();
  renderPassage();

  const checkBtn = document.getElementById("word-check");
  const resetBtn = document.getElementById("word-reset");
  const nextBtn = document.getElementById("word-next");
  if (checkBtn) checkBtn.addEventListener("click", checkWordArrange);
  if (resetBtn) resetBtn.addEventListener("click", renderWordArrange);
  if (nextBtn) nextBtn.addEventListener("click", nextSentence);
}

window.addEventListener("load", initReadingPage);
