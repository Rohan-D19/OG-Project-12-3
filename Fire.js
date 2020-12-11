class Fire{
    constructor(x,y,width,height){

    this.body = rect(x,y,width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/flame.png");
}
    display(){
      image(this.image, 900,1000, this.width, this.height);  
    }
}