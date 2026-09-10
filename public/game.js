const ROUND_LENGTH = 10;
const app = document.querySelector("#app");

const state = { data: null, mode: null, questions: [], options: [], index: 0, score: 0, answered: false };

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function sourceNote() {
  return `<p class="source-note">Dades locals: <a href="https://www.idescat.cat/" target="_blank" rel="noreferrer">Idescat</a>, <em>Municipis</em> (2023) i <em>Cims principals</em> (2021).</p>`;
}

function renderHome() {
  app.innerHTML = `
    <section class="panel welcome-panel" aria-labelledby="page-title">
      <p class="eyebrow">Catalunya, pregunta a pregunta</p>
      <h1 id="page-title">GeoTest</h1>
      <p class="intro">Tria un joc i respon deu preguntes. Pots usar les tecles <kbd>1</kbd>–<kbd>4</kbd> per respondre.</p>
      <div class="mode-grid">
        <button class="mode-card" type="button" data-mode="municipalities"><span class="mode-icon" aria-hidden="true">⌂</span><span>Municipis</span><small>Troba la comarca</small></button>
        <button class="mode-card" type="button" data-mode="peaks"><span class="mode-icon" aria-hidden="true">▲</span><span>Cims</span><small>Troba el cim principal</small></button>
      </div>
      ${sourceNote()}
    </section>`;
}

function startGame(mode) {
  const records = mode === "municipalities" ? state.data.municipalities : state.data.peaks;
  state.mode = mode;
  state.questions = shuffle(records).slice(0, ROUND_LENGTH);
  state.index = 0;
  state.score = 0;
  state.answered = false;
  renderQuestion();
}

function questionDetails(record) {
  if (state.mode === "municipalities") return { prompt: `A quina comarca pertany ${record.municipality}?`, answer: record.county, answers: state.data.municipalities.map(({ county }) => county), label: "Municipis" };
  return { prompt: `Quin és el cim principal de ${record.county}?`, answer: record.peak, answers: state.data.peaks.map(({ peak }) => peak), label: "Cims" };
}

function choicesFor(answer, answers) {
  return shuffle([answer, ...shuffle([...new Set(answers.filter((item) => item !== answer))]).slice(0, 3)]);
}

function renderQuestion() {
  const details = questionDetails(state.questions[state.index]);
  state.options = choicesFor(details.answer, details.answers);
  app.innerHTML = `
    <section class="panel game-panel" aria-labelledby="question-title">
      <div class="game-meta"><span>${details.label}</span><span>Pregunta ${state.index + 1} de ${ROUND_LENGTH}</span></div>
      <div class="score-bar" aria-label="Puntuació: ${state.score}"><span style="width: ${(state.index / ROUND_LENGTH) * 100}%"></span></div>
      <h1 id="question-title">${details.prompt}</h1>
      <div class="answers" role="group" aria-label="Respostes possibles">${state.options.map((option, index) => `<button class="answer" type="button" data-answer="${index}"><b>${index + 1}</b><span>${option}</span></button>`).join("")}</div>
      <div id="feedback" class="feedback" aria-live="assertive"></div>
      <div class="game-actions"><button class="quiet-button" type="button" data-home>Torna als jocs</button></div>
    </section>`;
}

function answerQuestion(optionIndex) {
  if (state.answered) return;
  state.answered = true;
  const details = questionDetails(state.questions[state.index]);
  const answer = state.options[optionIndex];
  const correct = answer === details.answer;
  if (correct) state.score += 1;
  document.querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (state.options[index] === details.answer) button.classList.add("correct");
    if (index === optionIndex && !correct) button.classList.add("incorrect");
  });
  const feedback = document.querySelector("#feedback");
  feedback.className = `feedback ${correct ? "is-correct" : "is-incorrect"}`;
  feedback.innerHTML = `<p>${correct ? "Correcte!" : `La resposta correcta és ${details.answer}.`}</p><button class="primary-button" type="button" data-next>${state.index + 1 === ROUND_LENGTH ? "Veure el resultat" : "Següent pregunta"}</button>`;
  feedback.querySelector("button").focus();
}

function nextQuestion() {
  if (state.index + 1 === ROUND_LENGTH) return renderResult();
  state.index += 1;
  state.answered = false;
  renderQuestion();
}

function renderResult() {
  app.innerHTML = `
    <section class="panel result-panel" aria-labelledby="result-title">
      <p class="eyebrow">Ronda acabada</p><h1 id="result-title">${state.score} de ${ROUND_LENGTH}</h1>
      <p class="intro">${state.score === ROUND_LENGTH ? "Perfecte!" : "Bona partida. Vols tornar-ho a provar?"}</p>
      <div class="result-actions"><button class="primary-button" type="button" data-replay>Juga de nou</button><button class="quiet-button" type="button" data-home>Tria un altre joc</button></div>
      ${sourceNote()}
    </section>`;
}

function renderError() {
  app.innerHTML = `<section class="panel loading-panel" role="alert"><h1>No s'han pogut carregar les preguntes</h1><p>Torna-ho a provar. Si el problema continua, revisa la connexió.</p><button class="primary-button" type="button" data-retry>Torna-ho a intentar</button></section>`;
}

async function loadData() {
  app.innerHTML = '<section class="panel loading-panel"><p>Carregant les preguntes…</p></section>';
  try {
    const [municipalities, peaks] = await Promise.all([
      fetch("./data/municipalities.json").then((response) => response.ok ? response.json() : Promise.reject(new Error("Municipality data unavailable"))),
      fetch("./data/peaks.json").then((response) => response.ok ? response.json() : Promise.reject(new Error("Peak data unavailable"))),
    ]);
    state.data = { municipalities, peaks };
    renderHome();
  } catch (error) {
    console.error(error);
    renderError();
  }
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.mode) startGame(button.dataset.mode);
  if (button.dataset.answer !== undefined) answerQuestion(Number(button.dataset.answer));
  if (button.hasAttribute("data-next")) nextQuestion();
  if (button.hasAttribute("data-replay")) startGame(state.mode);
  if (button.hasAttribute("data-home")) renderHome();
  if (button.hasAttribute("data-retry")) loadData();
});

document.addEventListener("keydown", (event) => {
  if (state.mode && !state.answered && event.key >= "1" && event.key <= "4") {
    const optionIndex = Number(event.key) - 1;
    if (state.options[optionIndex]) answerQuestion(optionIndex);
  }
});

loadData();
