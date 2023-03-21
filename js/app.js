let flashlight = document.getElementById("flashlight")

var mouseX = 0;
var mouseY = 0;
var xp = 0;
var yp = 0;

document.documentElement.addEventListener("mousemove", ev => {
    flashlight.style.visibility = "visible"
    mouseY = ev.pageY - 128
    mouseX = ev.pageX - 128
})

document.documentElement.addEventListener("touchmove", ev => {
    flashlight.style.visibility = "visible"
    mouseY = ev.touches[0].pageY - 128
    mouseX = ev.touches[0].pageX - 128
})

setInterval(function (){
    xp += ((mouseX - xp)/20);
    yp += ((mouseY - yp)/20);
    flashlight.style.top = yp + "px"
    flashlight.style.left = xp + "px"
}, 10)