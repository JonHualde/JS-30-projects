const pressed = [];
const secretCode = "jonhualde";
let bool = true;

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("You have found the secret combination!");
    cornify_add();
    
  }
});
