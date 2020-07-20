window.addEventListener("keydown", playSound); // window listener for keydown

// Here we select all keys and map on the array to add an event listener on every key.
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

// First function triggered, add the playing class
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stops the function from running

  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

// second function to remove the playing class
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if not a transform property
  this.classList.remove("playing");
}
