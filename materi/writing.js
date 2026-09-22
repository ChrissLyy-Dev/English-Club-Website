const WRITING_LEVELS = [
  {
    code: "A1",
    label: "A1 · Beginner",
    title: "Write about your family",
    instructions: "Write 4–6 simple sentences about your family. Use \"is\" and \"are\" correctly, and simple present tense.",
    checklist: [
      "Say how many people are in your family",
      "Use \"is\" or \"are\" correctly",
      "Write at least 4 sentences"
    ],
    minWords: 20
  },
  {
    code: "A2",
    label: "A2 · Elementary",
    title: "Write about your last holiday",
    instructions: "Write a short paragraph (6–8 sentences) about a holiday you took. Use past simple tense throughout.",
    checklist: [
      "Use past simple verbs (went, saw, ate…)",
      "Say where you went and what you did",
      "Include at least one adjective to describe it"
    ],
    minWords: 40
  },
  {
    code: "B1",
    label: "B1 · Intermediate",
    title: "Write an email inviting a friend to an event",
    instructions: "Write a friendly email (8–10 sentences). Include a greeting, the reason for writing, the details, and a closing.",
    checklist: [
      "Use an appropriate greeting and closing",
      "Explain the event clearly (what, when, where)",
      "Use at least one modal verb (can, should, would)"
    ],
    minWords: 60
  },
  {
    code: "B2",
    label: "B2 · Upper Intermediate",
    title: "For-and-against essay: social media",
    instructions: "Write a balanced essay (150+ words) discussing the advantages and disadvantages of social media, with your own opinion in the conclusion.",
    checklist: [
      "Present at least two points for and two points against",
      "Use linking words (however, moreover, on the other hand)",
      "Give your own opinion in the conclusion"
    ],
    minWords: 120
  },
  {
    code: "C1",
    label: "C1 · Advanced",
    title: "Formal letter of complaint",
    instructions: "Write a formal letter (180+ words) to a company complaining about a faulty product or poor service. Use formal register throughout.",
    checklist: [
      "Use formal language (no contractions, no slang)",
      "Clearly state the problem and what you want done about it",
      "Use at least one complex sentence with a subordinate clause"
    ],
    minWords: 150
  },
  {
    code: "C2",
    label: "C2 · Proficiency",
    title: "Argumentative essay on a complex topic",
    instructions: "Write a well-structured argumentative essay (250+ words) on: \"Does technology make us more or less connected to each other?\" Use sophisticated vocabulary and cohesive devices.",
    checklist: [
      "Present a clear thesis in your introduction",
      "Use hedging language where appropriate (arguably, it could be said that…)",
      "Use varied sentence structures, including at least one inversion or cleft sentence",
      "Conclude by synthesising your argument, not just repeating it"
    ],
    minWords: 200
  }
];

let currentWritingLevelIndex = 0;

function draftStorageKey(levelCode) {
  return "writing-draft-" + levelCode;
}

function countWords(text) {
  const trimmed = text.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

function renderWritingLevelTabs() {
  const container = document.getElementById("level-tabs");
  if (!container) return;
  container.innerHTML = "";
  WRITING_LEVELS.forEach(function (level, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = level.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentWritingLevelIndex));
    btn.addEventListener("click", function () {
      currentWritingLevelIndex = index;
      renderWritingLevelTabs();
      renderPrompt();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("level-heading");
  if (heading) heading.textContent = WRITING_LEVELS[currentWritingLevelIndex].label;
}

function updateWordCount() {
  const level = WRITING_LEVELS[currentWritingLevelIndex];
  const textarea = document.getElementById("writing-area");
  const wordCountEl = document.getElementById("word-count");
  if (!textarea || !wordCountEl) return;

  const words = countWords(textarea.value);
  wordCountEl.textContent = words + " word" + (words === 1 ? "" : "s") + " (target: " + level.minWords + "+)";
}

function renderPrompt() {
  const level = WRITING_LEVELS[currentWritingLevelIndex];

  const titleEl = document.getElementById("prompt-title");
  const instructionsEl = document.getElementById("prompt-instructions");
  const checklistEl = document.getElementById("checklist");
  const textarea = document.getElementById("writing-area");
  if (!titleEl || !instructionsEl || !checklistEl || !textarea) return;

  titleEl.textContent = level.title;
  instructionsEl.textContent = level.instructions;

  checklistEl.innerHTML = "";
  level.checklist.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    checklistEl.appendChild(li);
  });

  const saved = localStorage.getItem(draftStorageKey(level.code));
  textarea.value = saved || "";
  updateWordCount();

  const feedback = document.getElementById("writing-feedback");
  if (feedback) {
    feedback.textContent = saved ? "Draft restored from your last visit." : "";
    feedback.className = "feedback";
  }
}

function initWritingPage() {
  if (!document.getElementById("level-tabs")) return;

  renderWritingLevelTabs();
  renderPrompt();

  const textarea = document.getElementById("writing-area");
  const clearBtn = document.getElementById("writing-clear");

  if (textarea) {
    textarea.addEventListener("input", function () {
      const level = WRITING_LEVELS[currentWritingLevelIndex];
      localStorage.setItem(draftStorageKey(level.code), textarea.value);
      updateWordCount();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      const level = WRITING_LEVELS[currentWritingLevelIndex];
      localStorage.removeItem(draftStorageKey(level.code));
      textarea.value = "";
      updateWordCount();
      const feedback = document.getElementById("writing-feedback");
      if (feedback) {
        feedback.textContent = "Draft cleared.";
        feedback.className = "feedback";
      }
    });
  }
}

window.addEventListener("load", initWritingPage);
