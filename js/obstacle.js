function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (from - to)) + to;
}

class Obstacle {
  constructor() {
    // TODO
    this.x= random(30,W-30);
    this.y= 100;
    this.w= 200;
    this.h= 50;

  }

  draw() {
    // TODO
    ctx.fillStyle='red';
    ctx.fillRect(this.x,this.y,this.w,this.y);
  }
  // anim(){
  //   this.draw()
  //   this.y++;
  //   requestAnimationFrame(anim)
  // }
  // requestAnimationFrame(anim)

  hits(car) {
    // TODO
  }
}