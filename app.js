const texts = {
  facile: [
    "Le soleil brille sur la place du village.",
    "Un chat roux dort près de la fenêtre ouverte.",
    "Chaque matin, Léa prépare un café bien chaud.",
    "La pluie tombe doucement sur les toits gris.",
    "Paul range ses livres dans la grande armoire.",
    "Nous marchons au bord du lac après le repas.",
    "Le boulanger prépare du pain frais pour midi.",
    "Cette petite lampe éclaire toute la chambre.",
    "Mon frère joue souvent au ballon dans le jardin.",
    "Les enfants dessinent une maison et trois arbres.",
    "Le train arrive à la gare avec cinq minutes de retard.",
    "Une légère brise traverse les rideaux blancs.",
    "Julie écoute de la musique en faisant ses devoirs.",
    "Le chien attend son maître devant la porte bleue.",
    "Nous mangeons une tarte aux pommes encore tiède.",
    "Ce matin, la mer est calme et le ciel est clair.",
    "Arthur prend son vélo pour aller chez un ami.",
    "Le jardinier arrose les fleurs avant la chaleur.",
    "Une étoile brillante apparaît au-dessus des collines.",
    "Ma voisine porte un joli chapeau de paille.",
    "Les feuilles jaunes recouvrent le chemin du parc."
  ],
  moyen: [
    "À l'aube, les oiseaux s'éveillent doucement tandis que la ville retrouve peu à peu son rythme.",
    "Écrire avec précision demande de la patience, une attention calme et beaucoup de régularité.",
    "Après l'orage, l'air frais révèle les parfums du jardin et la lumière éclaire chaque feuille.",
    "Camille referma son carnet, puis observa longuement les nuages qui glissaient vers l'horizon.",
    "Dans la bibliothèque silencieuse, chacun cherchait un livre capable de nourrir son imagination.",
    "Même lorsque le chemin paraît difficile, quelques efforts réguliers finissent par porter leurs fruits.",
    "La vieille horloge du salon sonna minuit au moment précis où les invités quittaient la maison.",
    "Nous avons choisi un itinéraire plus long afin de découvrir les paysages cachés de la vallée.",
    "Au marché, les commerçants présentent leurs légumes colorés et discutent avec les premiers clients.",
    "Sophie hésita quelques secondes avant d'envoyer le message qu'elle avait soigneusement préparé.",
    "Le vent soulevait le sable fin, obligeant les promeneurs à protéger leurs yeux et leur visage.",
    "Pour progresser rapidement, mieux vaut rester détendu et conserver un rythme aussi stable que possible.",
    "Le professeur expliqua la règle une seconde fois, avec un exemple plus concret et plus amusant.",
    "Lorsque les lumières s'éteignirent, la salle entière applaudit avec une énergie surprenante.",
    "Élodie emporta un pull supplémentaire, car la météo annonçait une soirée fraîche et humide.",
    "Les premières notes du piano résonnèrent dans le théâtre, imposant aussitôt un silence attentif.",
    "Chaque dimanche, ils préparent ensemble un grand repas auquel participent leurs voisins les plus proches.",
    "Le jeune photographe attendit patiemment que le soleil traverse les branches couvertes de rosée.",
    "Cette recette paraît simple, mais elle exige des ingrédients frais et une cuisson parfaitement maîtrisée.",
    "Malgré la fatigue du voyage, nous avons exploré les rues animées du centre jusqu'à la nuit.",
    "Un parfum de cannelle flottait dans la cuisine pendant que le gâteau refroidissait sur la table."
  ],
  difficile: [
    "« Où vas-tu ? » demanda-t-elle ; Jérôme, hésitant, répondit qu'il rentrerait peut-être dès vingt-deux heures.",
    "L'extraordinaire ambiguïté de cette œuvre, quoique subtile, n'échappa ni aux critiques ni aux spectateurs.",
    "Grâce à un entraînement assidu, vous maîtriserez bientôt les accents, les apostrophes et la ponctuation française !",
    "À peine étions-nous installés que l'orage éclata : éclairs aveuglants, rafales violentes et pluie torrentielle.",
    "Le procès-verbal, rédigé à la hâte, comportait néanmoins plusieurs précisions jugées indispensables par l'assemblée.",
    "Qu'auriez-vous répondu, vous, si l'on vous avait posé cette question aussi soudaine qu'embarrassante ?",
    "D'après l'ingénieure, ce mécanisme complexe nécessiterait deux réglages supplémentaires avant d'être pleinement opérationnel.",
    "Les élèves, mi-amusés, mi-inquiets, découvrirent qu'aucune réponse ne correspondait exactement à l'énoncé proposé.",
    "Là-bas, au-delà des falaises abruptes, s'étendait un archipel méconnu où vivaient quelques pêcheurs expérimentés.",
    "« N'oubliez rien : clés, billets, passeports et médicaments », répéta-t-il en vérifiant chaque bagage.",
    "Bien qu'elle eût soigneusement étudié le dossier, Maïwenn demeurait perplexe face aux conclusions contradictoires.",
    "Ce chef-d'œuvre du XIXe siècle fut restauré grâce à des techniques extrêmement précises et coûteuses.",
    "Pourquoi faudrait-il choisir entre efficacité et créativité, alors qu'elles peuvent parfaitement se compléter ?",
    "L'écureuil s'immobilisa brusquement ; puis, d'un bond étonnamment agile, il disparut derrière l'épais feuillage.",
    "À 18 h 30 exactement, les vingt-cinq participants devront s'être présentés à l'accueil du bâtiment B.",
    "Les résultats, supérieurs de 12,5 % aux prévisions initiales, réjouirent l'équipe malgré quelques réserves.",
    "L'hypothèse selon laquelle ces phénomènes seraient liés demeure plausible, quoiqu'aucune preuve n'ait été établie.",
    "Faut-il réellement s'étonner que l'échéance ait été reportée après d'aussi nombreux contretemps ?",
    "Sous l'œil attentif du maître d'œuvre, les artisans ajustèrent méticuleusement chaque pièce du mécanisme.",
    "« Peut-être reviendra-t-elle demain… à moins qu'elle n'ait déjà changé d'avis », murmura Anaïs.",
    "L'exposé abordait pêle-mêle l'écologie, l'économie numérique, les médias et les enjeux géopolitiques contemporains."
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
  resultTitle: document.querySelector("#resultTitle"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
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
  const perfect = errors === 0;
  elements.feedback.textContent = perfect
    ? "Parfait : le texte est complet et sans faute."
    : `Texte terminé avec ${errors} ${errors === 1 ? "erreur corrigée" : "erreurs corrigées"}.`;
  elements.resultTitle.textContent = perfect ? "Parfait, aucune faute !" : "Bravo, texte terminé !";
  elements.resultAccuracy.textContent = elements.accuracy.textContent;
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
