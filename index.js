var totalImages = document.querySelectorAll(".drum").length;
for(var i = 0;i < totalImages; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
})};