let nums = [0x7E , 0x30,0x6D,0x79,0x33,0x5B, 0x5F, 0x70,0x7F,0x7B]
let index = 0;
let val = -1;
let inf= false;
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}
function display_change(){
  val = document.querySelector("#input").value;
   document.querySelector("#bt").innerText = "loop";
   inf = false;
}
function loop1(){
  if(inf){
    inf = false
    document.querySelector("#bt").innerText = "loop";
  }
  else{
  inf = true;
  console.log(inf)
  document.querySelector("#bt").innerText = "stop";
}
}
function draw() {
   background(220);
  if(inf){
    index = index % 10;
    sevenSegment(nums[index]);
    index++;
  }
  else{

  if(val != -1){
  sevenSegment(nums[val]);
}
}


}
function getColor(val ,shift){
  let r = 255;
  let alpha = 255*((val >>shift)&1);
  return color(r,0,0,alpha);
}

function sevenSegment(val){
  push();
  stroke(0);
  fill(getColor(val, 6))
  //A
  rect(60,20,78,18);
  //B
  fill(getColor(val, 5))
  rect(140,40,18,98);
  //C
  fill(getColor(val, 4));
  rect(140,160,18,98);
  //D
  fill(getColor(val, 3));
  rect(60,260,80,18);
  //E
  fill(getColor(val, 2));
  rect(40,160,18,98);
  //F
  fill(getColor(val, 1));
  rect(40,40,18,98);
  //G
  fill(getColor(val, 0));
  rect(60,140,78,18);

  pop();
}
