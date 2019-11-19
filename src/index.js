import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let lastTime = 0;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, canvas);

function gameLoop(timestamp) {
  //time since last frame
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  
  //keep running game loop
  requestAnimationFrame(gameLoop);
}

//start the game loop
requestAnimationFrame(gameLoop);