var red = document.getElementById("r")
red.oninput = function name(){
 
   
    document.documentElement.style.setProperty('--red', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}


var blue = document.getElementById("g")
blue.oninput = function(){
    document.documentElement.style.setProperty('--blue', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}


var green = document.getElementById("b")
green.oninput = function(){
    document.documentElement.style.setProperty('--green', `${this.value}`);
    document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
}




