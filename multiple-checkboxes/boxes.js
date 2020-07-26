const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastCheck;
const unchecked = document.querySelector(".unchecked");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});

function handleCheck(e) {
  // check if shift key is used and check that hey are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox == lastCheck) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheck = this;
}

unchecked.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
});
