let x = 100; 
let y = 250; 
let r1 = 30; 
let r2 = 18; 
let x1 = 300; 
let y1 = 100; 
let slider; 
let i=0; 
let colour = 0; 
let ytime=0; 
function setup() { 
 createCanvas(500,500); 
 slider = createSlider(1,10,3); 
 slider.position(400,10); 
 slider.style('width','80px'); 
} 
function draw() { 
 
 background(colour); 
 let speed = slider.value(); 
 fill('red'); 
 let c = circle(x,y,r1); 
 let c1 = circle(x1,y1,r2); 
 
 if(keyIsDown(RIGHT_ARROW)==true) 
 { 
 if(x<500-(20)) 
 { 
 x+=speed; 
 } 
 } 
 
 if(keyIsDown(LEFT_ARROW)==true) 
 { 
 if(x>20) 
 { 
 x-=speed;// move left 
 } 
 } 
 if(keyIsDown(DOWN_ARROW)==true) 
 { 
 if(y<500-(20)) 
 { 
 y+=speed;// move down 
 } 
 } 
 if(keyIsDown(UP_ARROW)==true) 
 { 
 if(y>20) 
 { 
 y-=speed // move up 
 } 
 } 
 if(dist(x,y,x1,y1)<(r1+r2)/2) 
 { 
 x1 = floor(random(10, (width - 100) / 10)) * 10; 
 y1 = floor(random(10, (height - 100) / 10)) * 10; 
 i++; 
 colour = color(random(255),random(255),random(255)); 
 } 
 textSize(32); 
 fill('white'); 
 text('Score: '+i, 10, 30); 
 fill('palegreen'); 
 rect(470,ytime+=0.14%500,100,10); 
 //if ytime is set to 0.14%, timelimit is 1min... 
 if(ytime>=500) 
 { 
 print('Sorry, your time is up!'); 
 print('Your Score is: '+i); 
 print('click on "run" to restart the game...') 
 noLoop(); 
 } 
 else 
 { 
 loop(); 
 } 
 
} 