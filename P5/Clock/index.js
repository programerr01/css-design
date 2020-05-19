// Creating the canvas
function setup(){
    createCanvas(400,400);
    // Angle mode in degree default is radian
    angleMode(DEGREES);
}
function draw(){
// Background is black
    background(0);
 // offset the origin by 200,200
    translate(200,200);
 // rotating the plane by -90deg
    rotate(-90);
 // hour , minute and second of the clock
 hr = hour();
    mn = minute();
    ss = second()

   // drawing the arc of the second , minute and hour
    strokeWeight(8)
    stroke(255,0,150);
    noFill();
    secondAngle = map(ss , 0,60,0,360);
    arc(0,0,300,300,0,secondAngle)

    stroke(255,100,0);
    minuteAngle = map(mn , 0,60,0,360);
    arc(0,0,280,280,0, minuteAngle)

    stroke(255,59,100);
    hourAngle = map(hr%12 , 0,12,0,360);
    arc(0,0,260,260,0,hourAngle)
// creating the pointer for the minute , second and hour
    push();
    rotate(secondAngle);
    stroke(255,0,150);
    line(0,0,100,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255,150,0);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255,59,100);
    line(0,0,50,0);
    pop();
    // noStroke();
    // text(hr + ":" + mn +":" + ss, 10,200);
    stroke(255);
    point(0,0);


}
