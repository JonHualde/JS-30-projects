const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(" .min-hand");
const hourHand = document.querySelector(" .hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondHand.style.background = "#fff";

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minuteHand.style.background = "#395E77";

  const hours = now.getHours();
  const hoursDegrees = hours * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourHand.style.background = "#5588FF";
}

setInterval(() => {
  setDate();
}, 1000);
