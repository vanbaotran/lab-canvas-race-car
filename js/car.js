class Car {
  constructor() {
   
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      console.log('chargee',img.naturalWidth,img.naturalHeight)
      // TODO
      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = W/2-this.w/2;
      this.y = H-this.h;
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    // TODO
  }

  moveLeft() {
    // TODO
    this.x-=20;
    this.draw();
  }
  moveRight() {
    // TODO
    this.x+=20;
    this.draw();
  }
}