function random(from, to) {
  // TODO
  return Math.floor(Math.random()*(to - from)+from)
}

class Obstacle {
  constructor() {
    // TODO
    this.w = random(30,W-220);
    this.h = 50;
    this.x = random(70,W-70-this.w);
    this.y = 0;
  }

  draw() {
    // TODO
    ctx.fillStyle='#990000';
    ctx.fillRect(this.x,this.y,this.w,this.h)
  }
  bottom(){
    return this.y+this.h;
  }
  top(){
    return this.y
  }
  left(){
    return this.x;
  }
  right(){
    return this.x+this.h;
  }
  hits(car) {
    // TODO
    return ( 
    this.bottom() > car.top() &&
    this.top() < car.bottom() &&
    this.right() > car.left() &&
    this.left() < car.right()
    );
  }
}