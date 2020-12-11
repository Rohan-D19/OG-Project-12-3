var backgroundImg;
var flame;

function preload(){
    backgroundImg = loadImage("images/Iceberg.png");
}
function setup(){
    createCanvas(displayWidth, displayHeight);
    backgroundImg.scale = 2;
    flame = new Fire(2000,2000,50,75);
}
function draw(){
    background(backgroundImg);
    flame.display();
}