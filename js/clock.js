const clock = document.querySelector(".clock");

var week = new Array(
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
);

function getClock() {
  const date = new Date();
  const houres = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const day = date.getDay();
  const dayLabel = week[day];
  clock.innerText = `${houres}:${minutes}:${seconds} ${dayLabel}`;
}

getClock();
setInterval(getClock, 1000);
