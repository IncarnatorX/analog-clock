let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourRotation = 30 * hh + mm / 2;
  let minRotation = 6 * mm;
  let secRotation = 6 * ss;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  seconds.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);

displayTime();
