const nightRemainTime = document.querySelector(".current_location_night");

function busRemainTime_N() {
  const dayLabel = clockDayLabel.innerText;
  const ch_time = clockCh_time.innerText;

  if (dayLabel == "토요일" || dayLabel == "일요일") {
    nightRemainTime.innerText = `주말은 운행하지 않습니다. 😭`;
    return;
  }
  if (1170 > ch_time || ch_time > 1440) {
    nightRemainTime.innerText = `운영시간이 아닙니다. 😥`;
    return;
  }
  if (1400 < ch_time) {
    nightRemainTime.innerText = `금일 운영이 종료되었습니다. 🥺`;
    return;
  }

  var night_l_dep = 0;
  var night_n_dep = 1200;
  for (var i = 0; i < night_timeline.length - 1; i++) {
    if (ch_time >= night_timeline[i]) {
      var night_l_dep = night_timeline[i];
      var night_n_dep = night_timeline[i + 1];
    }
  }
  if (night_l_dep == 0) {
    const wait_time = night_n_dep - ch_time;
    nightRemainTime.innerText = `첫차까지 ${wait_time}분 남았습니다.`;
  } else {
    const next_wait_time = night_n_dep - ch_time;
    nightRemainTime.innerText = `${next_wait_time}분후 출발합니다.`;
  }
}

busRemainTime_N();
setInterval(busRemainTime_N, 1000);
