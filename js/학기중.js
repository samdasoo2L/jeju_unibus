var a_locations = document.querySelector(".current_location_a");
var b_locations = document.querySelector(".current_location_b");

function busRemainTime_H() {
  const dayLabel = clockDayLabel.innerText;
  const ch_time = clockCh_time.innerText;

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

busRemainTime_H();
setInterval(busRemainTime_H, 1000);
