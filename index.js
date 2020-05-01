var red = document.getElementById("r")
red.oninput = function name(){
 
   
    document.documentElement.style.setProperty('--red', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}


var blue = document.getElementById("b")
blue.oninput = function(){
    document.documentElement.style.setProperty('--blue', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}


var green = document.getElementById("g")
green.oninput = function(){
    document.documentElement.style.setProperty('--green', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}

function componentToHex(c){
var hex  = c.toString(16);
    return hex.length == 1? "0" + hex : hex;}
function hex1(r,g,b){
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);}

function hex(){
document.getElementById("p").innerText = hex1(Number(red.value) , Number(green.value) , Number(blue.value)) }


