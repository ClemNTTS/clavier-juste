const texts = {
  facile: [
    "Le soleil brille sur la place du village.",
    "Un chat roux dort près de la fenêtre ouverte.",
    "Chaque matin, Léa prépare un café bien chaud."
  ],
  moyen: [
    "À l'aube, les oiseaux s'éveillent doucement tandis que la ville retrouve peu à peu son rythme.",
    "Écrire avec précision demande de la patience, une attention calme et beaucoup de régularité.",
    "Après l'orage, l'air frais révèle les parfums du jardin et la lumière éclaire chaque feuille."
  ],
  difficile: [
    "« Où vas-tu ? » demanda-t-elle ; Jérôme, hésitant, répondit qu'il rentrerait peut-être dès vingt-deux heures.",
    "L'extraordinaire ambiguïté de cette œuvre, quoique subtile, n'échappa ni aux critiques ni aux spectateurs.",
    "Grâce à un entraînement assidu, vous maîtriserez bientôt les accents, les apostrophes et la ponctuation française !"
  ]
};

const elements = {
  difficulty: document.querySelector("#difficultySelect"),
  newText: document.querySelector("#newTextButton"),
  restart: document.querySelector("#restartButton"),
  next: document.querySelector("#nextButton"),
  theme: document.querySelector("#themeButton"),
  display: document.querySelector("#textDisplay"),
  input: document.querySelector("#typingInput"),
  feedback: document.querySelector("#feedback"),
  accuracy: document.querySelector("#accuracyStat"),
  speed: document.querySelector("#speedStat"),
  time: document.querySelector("#timeStat"),
  dialog: document.querySelector("#resultDialog"),
  resultSpeed: document.querySelector("#resultSpeed"),
  resultTime: document.querySelector("#resultTime")
};

let target = "";
let previousIndex = -1;
let startedAt = null;
let timerId = null;
let attempts = 0;
let errors = 0;

function chooseText() {
  const choices = texts[elements.difficulty.value];
  let index = Math.floor(Math.random() * choices.length);
  if (choices.length > 1 && index === previousIndex) index = (index + 1) % choices.length;
  previousIndex = index;
  target = choices[index];
  resetExercise();
}

function renderText(progress = 0) {
  elements.display.replaceChildren(...Array.from(target, (character, index) => {
    const span = document.createElement("span");
    span.textContent = character;
    if (index < progress) span.className = "correct";
    if (index === progress) span.className = "current";
    return span;
  }));
}

function resetExercise() {
  clearInterval(timerId);
  startedAt = null;
  timerId = null;
  attempts = 0;
  errors = 0;
  elements.input.value = "";
  elements.input.disabled = false;
  elements.input.classList.remove("has-error");
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "Prêt ? Concentrez-vous sur chaque caractère.";
  elements.accuracy.textContent = "100 %";
  elements.speed.textContent = "0";
  elements.time.textContent = "00:00";
  renderText();
  elements.input.focus();
}

function elapsedSeconds() {
  return startedAt ? Math.max(1, Math.floor((Date.now() - startedAt) / 1000)) : 0;
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function updateStats() {
  const seconds = elapsedSeconds();
  const correctCharacters = elements.input.value.length;
  const wordsPerMinute = seconds ? Math.round((correctCharacters / 5) / (seconds / 60)) : 0;
  const accuracy = attempts ? Math.round(((attempts - errors) / attempts) * 100) : 100;
  elements.time.textContent = formatTime(seconds);
  elements.speed.textContent = String(wordsPerMinute);
  elements.accuracy.textContent = `${Math.max(0, accuracy)} %`;
}

function begin() {
  if (startedAt) return;
  startedAt = Date.now();
  timerId = setInterval(updateStats, 250);
}

function finish() {
  clearInterval(timerId);
  updateStats();
  elements.input.disabled = true;
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "Parfait : le texte est complet et sans faute.";
  elements.resultSpeed.textContent = elements.speed.textContent;
  elements.resultTime.textContent = elements.time.textContent;
  elements.dialog.showModal();
}

elements.input.addEventListener("beforeinput", (event) => {
  if (!event.data || event.inputType !== "insertText") return;
  begin();
  const expected = target[elements.input.value.length];
  attempts += 1;
  if (event.data !== expected) {
    event.preventDefault();
    errors += 1;
    elements.input.classList.remove("has-error");
    void elements.input.offsetWidth;
    elements.input.classList.add("has-error");
    elements.feedback.className = "feedback error";
    elements.feedback.textContent = `Caractère attendu : « ${expected === " " ? "espace" : expected} »`;
    updateStats();
  }
});

elements.input.addEventListener("input", () => {
  begin();
  elements.input.classList.remove("has-error");
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "Très bien, continuez sans vous presser.";
  renderText(elements.input.value.length);
  updateStats();
  if (elements.input.value === target) finish();
});

elements.input.addEventListener("paste", (event) => event.preventDefault());
elements.restart.addEventListener("click", resetExercise);
elements.newText.addEventListener("click", chooseText);
elements.difficulty.addEventListener("change", () => { previousIndex = -1; chooseText(); });
elements.next.addEventListener("click", () => { elements.dialog.close(); chooseText(); });

elements.theme.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "" : "dark";
  elements.theme.textContent = isDark ? "☾" : "☀";
  elements.theme.setAttribute("aria-label", isDark ? "Activer le thème sombre" : "Activer le thème clair");
});

chooseText();
