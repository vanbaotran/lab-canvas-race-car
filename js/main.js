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
  //
  ctx.fillStyle='green';
  ctx.fillRect(0,0,40,H);
  ctx.fillRect(W-40,0,40,H)
  ctx.fillStyle='dimgray';
  ctx.fillRect(40,0,20,H);
  ctx.fillRect(W-60,0,20,H)
  ctx.fillRect(70,0,W-140,H)
  for (let i=0;i<40;i++){
    let y=0;
    y=i*50;
    ctx.fillStyle='white';
    ctx.fillRect(W/2-5,y,5,20)
  }
  ctx.fillStyle='white';
  ctx.fillRect(60,0,10,H);
  ctx.fillRect(W-70,0,10,H)
  
  // TODO

  //
  // Iteration 2: car drawing
  //
  car.draw();
  // TODO

  //
  // Iteration #4: obstacles
  //

 if (frames%250===0){
    let obst=new Obstacle;
    obstacles.push(obst);
  }
  for (let i=0;i<obstacles.length;i++){
    obstacles[i].y++;
    obstacles[i].draw();
  }

  // TODO

  //
  // Iteration #5: collisions
  // 
  for (let i=0;i<obstacles.length;i++){
    if (obstacles[i].hits(car)){
      gameover=true;
    }
  }
  // TODO

  //
  // Iteration #6: points
  //
  // TODO
  var score = Math.floor(frames/200);//score 
  score++;
  ctx.font='80px serif'
  ctx.fillStyle='white'
  ctx.fillText(`Score:${score}`,100,100)
}

document.onkeydown = function (e) {
  if (!car) return;
  switch (e.key){
    case 'ArrowLeft':
      car.moveLeft();
      car.draw();
      break;
    case 'ArrowRight':
      car.moveRight();
      car.draw();
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
  
  
  // TODO

  car = new Car();//draw the car
  obstacles=[];//draw obstacles
 

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
