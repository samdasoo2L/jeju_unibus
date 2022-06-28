var ha_locations = document.querySelector(".current_location_ha");

function busRemainTime_ha() {
  const dayLabel = clockDayLabel.innerText;
  const ch_time = clockCh_time.innerText;

  if (dayLabel == "토요일" || dayLabel == "일요일") {
    ha_locations.innerText = `주말은 운행하지 않습니다.`;
    return;
  }
  if (440 > ch_time || ch_time > 1200) {
    ha_locations.innerText = `운영시간이 아닙니다.`;
    return;
  }

  var ha_l_dep = 0;
  var ha_n_dep = 485;
  for (var i = 0; i < ha_timeline.length - 1; i++) {
    if (ch_time >= ha_timeline[i]) {
      var ha_l_dep = ha_timeline[i];
      var ha_n_dep = ha_timeline[i + 1];
    }
    if (ha_l_dep == 0) {
      const wait_time = ha_n_dep - ch_time;
      ha_locations.innerText = `첫차까지 ${wait_time}분 남았습니다.`;
    } else if (ha_timeline[11] + 12 <= ch_time) {
      ha_locations.innerText = `금일 운영 종료되었습니다.`;
    } else if (ch_time - ha_l_dep < 12) {
      const now_location = a_location[ch_time - ha_l_dep];
      ha_locations.innerText = `현재 ${now_location}을 지나고 있습니다.`;
    } else {
      const next_wait_time = ha_n_dep - ch_time;
      ha_locations.innerText = `${next_wait_time}분후 출발합니다.`;
    }
  }
}

busRemainTime_ha();
setInterval(busRemainTime_ha, 1000);
