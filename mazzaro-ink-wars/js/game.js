// ------------------------------------
// CONFIGURACIÓN DEL CANVAS
// ------------------------------------
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ------------------------------------
// ESTADOS DEL JUEGO
// ------------------------------------
const GAME_STATE = {
  MENU: "menu",
  GAME: "game",
  PUZZLE: "puzzle",
  GAME_OVER: "game_over",
};

let state = GAME_STATE.MENU;
let lastTime = 0;

// VARIABLES DEL JUEGO
let level = 1;
let life = 3;
let ink = 100;

// ------------------------------------
// RUTA DEL ENEMIGO (camino en S)
// ------------------------------------
const pathPoints = [
  { x: 0.1, y: 0.1 },
  { x: 0.6, y: 0.2 },
  { x: 0.4, y: 0.5 },
  { x: 0.2, y: 0.8 },
  { x: 0.9, y: 0.9 }
];

function getPathPoint(i) {
  return {
    x: pathPoints[i].x * canvas.width,
    y: pathPoints[i].y * canvas.height,
  };
}

// ------------------------------------
// CLASE ENEMIGO
// ------------------------------------
class Enemy {
  constructor() {
    this.speed = 120; 
    this.hp = 30;
    this.currentPoint = 0;

    const start = getPathPoint(0);
    this.x = start.x;
    this.y = start.y;
  }

  update(dt) {
    const target = getPathPoint(this.currentPoint + 1);

    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 4) {
      this.currentPoint++;
      if (this.currentPoint >= pathPoints.length - 1) {
        life--;
        return true;
      }
      return false;
    }

    this.x += (dx / dist) * this.speed * dt;
    this.y += (dy / dist) * this.speed * dt;
    return false;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#A000FF";
    ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
    ctx.fill();
  }
}

// LISTA ENEMIGOS
let enemies = [];
let enemyTimer = 0;

// ------------------------------------
// LOOP PRINCIPAL DEL JUEGO
// ------------------------------------
function init() {
  requestAnimationFrame(gameLoop);
}

function gameLoop(ts) {
  const dt = (ts - lastTime) / 1000;
  lastTime = ts;

  update(dt);
  render();

  requestAnimationFrame(gameLoop);
}

// ------------------------------------
// UPDATE
// ------------------------------------
function update(dt) {
  switch (state) {
    case GAME_STATE.MENU:
      break;

    case GAME_STATE.GAME:
      enemyTimer += dt;

      if (enemyTimer > 1.5) {
        enemies.push(new Enemy());
        enemyTimer = 0;
      }

      enemies = enemies.filter(e => !e.update(dt));

      if (life <= 0) {
        state = GAME_STATE.GAME_OVER;
      }
      break;
  }
}

// ------------------------------------
// RENDER
// ------------------------------------
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  switch (state) {
    case GAME_STATE.MENU:
      drawMenu();
      break;

    case GAME_STATE.GAME:
      drawPath();
      drawEnemies();
      break;

    case GAME_STATE.GAME_OVER:
      drawGameOver();
      break;
  }
}

// ------------------------------------
// FUNCIONES DE DIBUJO
// ------------------------------------
function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, "#050505");
  grad.addColorStop(1, "#151515");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawMenu() {
  ctx.fillStyle = "#fff";
  ctx.font = "48px serif";
  ctx.textAlign = "center";
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

function drawEnemies() {
  enemies.forEach(e => e.draw());
}

function drawGameOver() {
  ctx.fillStyle = "#fff";
  ctx.font = "48px serif";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
}

// ------------------------------------
// EVENTOS
// ------------------------------------
canvas.addEventListener("click", () => {
  if (state === GAME_STATE.MENU) {
    state = GAME_STATE.GAME;
  }
});

init();
