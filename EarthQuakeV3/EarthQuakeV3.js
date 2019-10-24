var centerLatitude = 0;
var centerLongtitude = 0; 
var Latitude = 30;
var Longtitude  = 40;
var zoom = 1;
var  worldMap;

function setup() {
  preload();
  createCanvas (600, 600);
  //  fullScreen();
  translate (width/2, height/2);
  imageMode(CENTER);
  image (worldMap, 0, 0);
  fill (255, 0, 255);
}

function draw() {
}

function preload() {
  worldMap = loadImage ("World Map.jpg");
  worldMap.resize(width, height);
}

/*
function mercX(){
 Longtitude = radians (Longtitude);
 var a = (256/PI)* pow(2, zoom);
 var b = Longtitude + PI;
 return a*b ;  
 
 }
 
 function mercY(){
 Latitude = radians (Latitude);
 var a = (256/PI)* pow(2,zoom);
 var b = tan (PI/4+Latitude/2) ;
 var c = PI - log(b);
 return  a * c ;  
 }*/
