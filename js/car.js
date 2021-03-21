class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = W/2-this.w/2;
      this.y = H - this.h;
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
    // TODO
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
  moveLeft() {
    // TODO
    this.x-=20;
  }
  moveRight() {
    // TODO
    this.x+=20;
  }
}