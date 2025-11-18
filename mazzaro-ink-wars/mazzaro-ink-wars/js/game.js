const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ajuste responsivo del tamaño
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Estados del juego
const GAME_STATE = {
  MENU: "menu",
  GAME: "game",
  PUZZLE: "puzzle",
  GAME_OVER: "game_over",
};

let state = GAME_STATE.MENU;
let lastTime = 0;

// Variables del juego
let level = 1;
let life = 3;
let ink = 100;

// Inicio
function init() {
  requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
  const dt = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  update(dt);
  render();

  requestAnimationFrame(gameLoop);
}

function update(dt) {
  switch (state) {
    case GAME_STATE.MENU:
      break;

    case GAME_STATE.GAME:
      // Acá más adelante: enemigos, torres, oleadas, puzzles
      break;

    case GAME_STATE.PUZZLE:
      // Acá irán los acertijos
      break;
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  switch (state) {
    case GAME_STATE.MENU:
      drawMenu();
      break;
    case GAME_STATE.GAME:
      drawPath();
      break;
    case GAME_STATE.PUZZLE:
      drawPath();
      drawPuzzleOverlay();
      break;
  }
}

function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, "#050505");
  grad.addColorStop(1, "#151515");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawMenu() {
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.font = "48px Cinzel, serif";
  ctx.fillText("Mazzaro Ink Wars", canvas.width / 2, canvas.height / 2 - 40);

  ctx.font = "22px Arial";
  ctx.fillText("Tocá para empezar", canvas.width / 2, canvas.height / 2 + 10);
}

function drawPath() {
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 20;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(canvas.width * 0.1, canvas.height * 0.1);
  ctx.quadraticCurveTo(
    canvas.width * 0.6, canvas.height * 0.2,
    canvas.width * 0.4, canvas.height * 0.5
  );
  ctx.quadraticCurveTo(
    canvas.width * 0.2, canvas.height * 0.8,
    canvas.width * 0.9, canvas.height * 0.9
  );
  ctx.stroke();
}

function drawPuzzleOverlay() {
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.font = "32px Arial";
  ctx.fillText("Puzzle en progreso...", canvas.width / 2, canvas.height / 2);
}

canvas.addEventListener("click", () => {
  if (state === GAME_STATE.MENU) {
    state = GAME_STATE.GAME;
  }
});

init();
