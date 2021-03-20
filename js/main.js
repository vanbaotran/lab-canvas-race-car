let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 30, canvas.height);
  ctx.fillRect(canvas.width - 30, 0, 30, canvas.height);
  ctx.fillStyle = 'dimgray';
  ctx.fillRect(30, 0, 10, canvas.height);
  ctx.fillRect(canvas.width - 40, 0, 10, canvas.height);
  ctx.fillRect(50, 0, canvas.width - 100, canvas.height);
  let y=0;
  for (let i=0;i<45;i++){
    ctx.fillStyle='white';
    y=i*50;
    ctx.fillRect(W/2+5,y,5,20);
  }
  // TODO

  //
  // Iteration 2: car drawing
  //  
  // TODO
  car.draw();
  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;
  console.log('touche appuyee',e)
  switch (e.key){
    case 'ArrowLeft':
      car.moveLeft();
      car.draw();
      break;
    case 'ArrowRight':
      car.moveRight();
      car.draw();
      break;
  }

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  car = new Car();
  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
