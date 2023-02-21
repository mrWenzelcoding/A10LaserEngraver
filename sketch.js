let x,y,d,xSpeed,ySpeed;
let r,g,b;
let xOff;
let canvas2;
let x2,y2,d2,incr;

function setup() {
  //Creating Canvas and Settings
  createCanvas(600, 600);
  canvas2 = createGraphics(600,600)
  canvas2.clear()
  noStroke();
  canvas2.noStroke()
  angleMode(DEGREES)
  
  //Initializing Variables
  d = 40;
  xOff=0;
  r = random(0,60)
  g = random(132,208)
  b = random(155,255)
  x2=0
  y2=0
  d2=50
  incr=-1
}

function draw() {

    if(frameCount<2500){
      
    interstingPaint();
    }
    circular(); 
    background(0,80);

}

function interstingPaint(){
  //Canvas 2 Painting

  x = noise(xOff)
  y = noise(xOff+2)
  x=map(x,0,1,0,width)
  y=map(y,0,1,0,height)
  xOff += 0.01;
  canvas2.fill(r,g,b);
  canvas2.circle(x,y,d);
  d-=0.3;
  
  //Resets
  if(d<5){
    xOff+=1
    d=30
    r = random(0,60)
    g = random(132,208)
    b = random(155,255)
  }
}

function circular(){
  
  let numCirc = 8;
  fill(r,g,b)
  image(canvas2,0,0)
 
  if(frameCount<2500){
   
  //red laser effect
  for(let i = 0; i<30; i++){
    push()
    fill(255,255,255,100-i*2)  
    circle(x,y,i);
    pop() 
  }

    
  for(let i = 0; i<numCirc; i++){ 
    
  //Drawing Cirlces
  
    let cX = cos(x2+i*360/numCirc)*width/2+width/2
    let cY = sin(y2+i*360/numCirc)*height/2+height/2
    circle(cX,cY,d2)
    x2+=0.1
    y2+=0.1
      
     
      //Drawing Lines
      strokeWeight(2)
      line(cX,cY,x,y)
      stroke(r,g,b)
  }  
  
      //Variation in Circle Size
    
      d2 = d2 + incr 
  
      if(d2<10){
        incr = incr * -1
      }
      if(d2>55){
        incr = incr * -1
      }
  }
  else{
    fill(0)
  }
}