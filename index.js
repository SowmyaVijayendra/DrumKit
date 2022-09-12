var buttons=document.querySelectorAll(".drum");
for(var i=0; i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    handleEvent(this.innerHTML);
    animateButton(this.innerHTML)});
    /*
    buttons[i].addEventListener("mouseup",function(){
      unAnimateButton(this.innerHTML)});*/
}
document.addEventListener("keydown",function(event){
  handleEvent(event.key);
  animateButton(event.key)});
  /*
  document.addEventListener("keyup",function(event){
    unAnimateButton(event.key)});*/

function animateButton(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
}
/*
function unAnimateButton(key){
  document.querySelector("."+key).classList.remove("pressed");
}*/
function handleEvent(key)
{

  var audio;
  switch(key){
    case "w":
    audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    audio= new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    audio= new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "l":
    audio= new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    default: console.log(source);
  }

}
