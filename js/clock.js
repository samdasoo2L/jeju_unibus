const clock = document.querySelector(".clock");
const clockDayLabel = document.querySelector(".clockHiddenD");
const clockCh_time = document.querySelector(".clockHiddenCh");

function getClock() {
  const date = new Date();
  const houres = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const day = date.getDay();
  var dayLabel = week[day];
  clock.innerText = `${houres}:${minutes}:${seconds} ${dayLabel}`;
  var ch_time = date.getHours() * 60 + date.getMinutes();
  clockDayLabel.innerText = dayLabel;
  clockCh_time.innerText = ch_time;
}
getClock();
setInterval(getClock, 1000);
