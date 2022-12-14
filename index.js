function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  makeAnimation(buttonInnerHTML);
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();

addEventListener("keypress", function (e) {
  makeSound(e.key);
  makeAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}
function makeAnimation(curKey) {
  let activeBtn = document.querySelector("." + curKey);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
