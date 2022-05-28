const clock = document.querySelector(".clock");
var a_locations = document.querySelector(".current_location_a");
var b_locations = document.querySelector(".current_location_b");

var week = new Array(
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
);

const a_timeline = new Array(
  485,
  505,
  525,
  570,
  605,
  625,
  645,
  680,
  760,
  785,
  805,
  825,
  870,
  905,
  925,
  945,
  990,
  1020,
  1040,
  1060,
  1080,
  1100,
  1120,
  1200
);

var a_location = new Array(
  "정문",
  "약학대학",
  "해대 1호관",
  "본관",
  "학생회관",
  "인문대 서쪽",
  "학생생활관",
  "인문대 동쪽",
  "중앙도서관",
  "의과대학",
  "공대 4호관",
  "교양동"
);

var b_timeline = new Array(
  490,
  510,
  530,
  580,
  610,
  630,
  650,
  690,
  770,
  790,
  810,
  830,
  880,
  910,
  930,
  950,
  1000,
  1030,
  1050,
  1070,
  1090,
  1110,
  1130,
  1200
);

var b_location = new Array(
  "정문",
  "약학대학",
  "해대 1호관",
  "교양동",
  "공대 4호관",
  "의과대학",
  "중앙도서관",
  "인문대 동쪽",
  "학생생활관",
  "인문대 서쪽",
  "학생회관",
  "본관"
);

function getClock() {
  const date = new Date();
  const houres = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const day = date.getDay();
  const dayLabel = week[day];
  clock.innerText = `${houres}:${minutes}:${seconds} ${dayLabel}`;
  const ch_time = date.getHours() * 60 + date.getMinutes();
  if (dayLabel == "토요일" || dayLabel == "일요일") {
    a_locations.innerText = `주말은 운행하지 않습니다.`;
    b_locations.innerText = `주말은 운행하지 않습니다.`;
    return;
  }
  if (440 > ch_time || ch_time > 1200) {
    a_locations.innerText = `운영시간이 아닙니다.`;
    b_locations.innerText = `운영시간이 아닙니다.`;
    return;
  }

  var a_l_dep = 0;
  var a_n_dep = 485;
  var b_l_dep = 0;
  var b_n_dep = 490;
  for (var i = 0; i < a_timeline.length - 1; i++) {
    if (ch_time >= a_timeline[i]) {
      var a_l_dep = a_timeline[i];
      var a_n_dep = a_timeline[i + 1];
    }
    if (ch_time >= b_timeline[i]) {
      var b_l_dep = b_timeline[i];
      var b_n_dep = b_timeline[i + 1];
    }
  }
  if (a_l_dep == 0) {
    const wait_time = a_n_dep - ch_time;
    a_locations.innerText = `첫차까지 ${wait_time}분 남았습니다.`;
  } else if (a_timeline[22] + 12 <= ch_time) {
    a_locations.innerText = `금일 운영 종료되었습니다.`;
  } else if (ch_time - a_l_dep < 12) {
    const now_location = a_location[ch_time - a_l_dep];
    a_locations.innerText = `현재 ${now_location}을 지나고 있습니다.`;
  } else {
    const next_wait_time = a_n_dep - ch_time;
    a_locations.innerText = `${next_wait_time}분후 출발합니다.`;
  }
  if (b_l_dep == 0) {
    const wait_time = b_n_dep - ch_time;
    b_locations.innerText = `첫차까지 ${wait_time}분 남았습니다.`;
  } else if (b_timeline[22] + 12 <= ch_time) {
    b_locations.innerText = `금일 운영 종료되었습니다.`;
  } else if (ch_time - b_l_dep < 12) {
    const now_location = b_location[ch_time - b_l_dep];
    b_locations.innerText = `현재 ${now_location}을 지나고 있습니다.`;
  } else {
    const next_wait_time = b_n_dep - ch_time;
    b_locations.innerText = `${next_wait_time}분후 출발합니다.`;
  }
}
getClock();
setInterval(getClock, 1000);
