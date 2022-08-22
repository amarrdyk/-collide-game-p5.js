# -collide-game-p5.js
Collide play, is a 2D game and this has been designed using various commands and concepts of coordinate geometry. 

> The player controls a larger circle, resembling a ball, which roams around 
on a bordered plane, colliding the smaller ball, this’ position gets changed 
every time just after a collision. 
> Each time the larger ball collides a smaller ball, the score gets increased by 
1 within a bounded time. 
> The user controls the direction of the larger circle (bigger ball) i.e. up, 
down, left and right.

PsuedoCode: 

1. Start 
2. Declare x,y and r1 (where x and y are the coordinates of centre of bigger circle 
'c' and r1 is the radius). 
3. Declare x1,y1 and r2 ( where x1 and y1 are the coordinates of center of 
smaller circle 'c1' and r2 is the radius). 
4. Initialize the value of Score as 'i'. 
4. Initialize the value of x = 100, y= 250, r1 = 30, x1 = 300, y1 = 100, r2 = 18, i = 0, 
colour = 0 and ytime = 0. 
5. Create the slider that holds the vlaue of 'speed' i.e. varies according to it and 
default value of slider is set to 3 and (min, max) as (1, 10). 
6. If key(right_arrow) is pressed 
 then the value of 'x' is increased by speed 
 If key(left_arrow) is pressed 
 then the value of 'x' is decreased by speed 
 If key(down_arrow) is pressed 
 then the value of 'y' is increased by speed 
 If key(up_arrow) is pressed 
 then the value of 'y' is decreased by speed 
7. If ( distance(x,y,x1,y1)<average of radius of both the circles ) 
 x1 = floor(random(10,(width-100)/10))*10 
 y1 = floor(random(10,(height-100)/10))*10 
 i++ // i is increased by one 
 colour = color(random(255),random(255),random(255)) 
8. rect(470,ytime++,100,10) // creating the rectangle that slides from top to 
bottom which acts as a timer. 
9. If (ytime >= 500) 
 print("Sorry, your time is up!") 
 print(score) 
 noLoop() // ends the game 
 else 
 loop(); 
10. End 
