const BC_BASE = "https://learnenglish.britishcouncil.org/free-resources/listening";

const LISTENING_LEVELS = [
  {
    code: "A1",
    label: "A1 · Beginner",
    note: null,
    lessons: [
      { title: "Booking a table", desc: "Listen to someone booking a table in a restaurant.", url: BC_BASE + "/a1/booking-table" },
      { title: "A voicemail message", desc: "Listen to a voicemail message and answer the questions.", url: BC_BASE + "/a1/voicemail-message" },
      { title: "Ordering in a café", desc: "Listen to people ordering food and drinks in a café.", url: BC_BASE + "/a1/ordering-cafe" }
    ]
  },
  {
    code: "A2",
    label: "A2 · Elementary",
    note: null,
    lessons: [
      { title: "A morning briefing", desc: "Listen to a morning briefing at work.", url: BC_BASE + "/a2/morning-briefing" },
      { title: "Changing a meeting time", desc: "Listen to two colleagues arranging a meeting.", url: BC_BASE + "/a2/changing-meeting-time" },
      { title: "Leaving a message", desc: "Listen to someone leaving a phone message.", url: BC_BASE + "/a2/leaving-message" }
    ]
  },
  {
    code: "B1",
    label: "B1 · Intermediate",
    note: null,
    lessons: [
      { title: "A phone call from a customer", desc: "Listen to a customer service phone call.", url: BC_BASE + "/b1/phone-call-customer" },
      { title: "A weather forecast", desc: "Listen to a weather forecast and answer the questions.", url: BC_BASE + "/b1/weather-forecast" },
      { title: "An introduction to a lecture", desc: "Listen to the introduction of a psychology lecture.", url: BC_BASE + "/b1/introduction-lecture" }
    ]
  },
  {
    code: "B2",
    label: "B2 · Upper Intermediate",
    note: null,
    lessons: [
      { title: "A business interview", desc: "Listen to a business interview.", url: BC_BASE + "/b2/business-interview" },
      { title: "A lecture about an experiment", desc: "Listen to a lecture about a science experiment.", url: BC_BASE + "/b2/lecture-about-experiment" },
      { title: "Film reviews", desc: "Listen to reviews of several films.", url: BC_BASE + "/b2/film-reviews" }
    ]
  },
  {
    code: "C1",
    label: "C1 · Advanced",
    note: null,
    lessons: [
      { title: "A job interview", desc: "Listen to a job interview.", url: BC_BASE + "/c1/job-interview" },
      { title: "Tech addiction", desc: "Listen to a radio programme about tech addiction.", url: BC_BASE + "/c1/tech-addiction" },
      { title: "The history of hand gestures", desc: "Listen to a lecture about the history of hand gestures.", url: BC_BASE + "/c1/history-hand-gestures" }
    ]
  },
  {
    code: "C2",
    label: "C2 · Proficiency",
    note: "British Council's structured listening practice tops out at C1 (Advanced) — there is no separate C2 category. The C1 lessons below are their most advanced set; for more proficiency-level material, explore their full listening library using the link above.",
    lessons: [
      { title: "A job interview", desc: "Listen to a job interview.", url: BC_BASE + "/c1/job-interview" },
      { title: "Tech addiction", desc: "Listen to a radio programme about tech addiction.", url: BC_BASE + "/c1/tech-addiction" },
      { title: "The history of hand gestures", desc: "Listen to a lecture about the history of hand gestures.", url: BC_BASE + "/c1/history-hand-gestures" }
    ]
  }
];

let currentListeningLevelIndex = 0;

function renderListeningLevelTabs() {
  const container = document.getElementById("level-tabs");
  if (!container) return;
  container.innerHTML = "";
  LISTENING_LEVELS.forEach(function (level, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = level.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentListeningLevelIndex));
    btn.addEventListener("click", function () {
      currentListeningLevelIndex = index;
      renderListeningLevelTabs();
      renderLessons();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("level-heading");
  if (heading) heading.textContent = LISTENING_LEVELS[currentListeningLevelIndex].label;
}

function renderLessons() {
  const level = LISTENING_LEVELS[currentListeningLevelIndex];
  const container = document.getElementById("lessons-container");
  if (!container) return;
  container.innerHTML = "";

  if (level.note) {
    const note = document.createElement("p");
    note.className = "resource-note";
    note.textContent = level.note;
    container.appendChild(note);
  }

  level.lessons.forEach(function (lesson) {
    const card = document.createElement("div");
    card.className = "lesson-card";

    const text = document.createElement("div");
    text.className = "lesson-card-text";

    const title = document.createElement("h3");
    title.textContent = lesson.title;
    text.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = lesson.desc;
    text.appendChild(desc);

    const link = document.createElement("a");
    link.className = "lesson-card-link";
    link.href = lesson.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open lesson ↗";

    card.appendChild(text);
    card.appendChild(link);
    container.appendChild(card);
  });
}

function initListeningPage() {
  if (!document.getElementById("level-tabs")) return;
  renderListeningLevelTabs();
  renderLessons();
}

window.addEventListener("load", initListeningPage);
