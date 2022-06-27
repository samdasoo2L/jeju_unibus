const ha_locations_lo = document.querySelector(".current_location_ha");

const ha1 = document.querySelector(".pic_f_ha1");
const ha2 = document.querySelector(".pic_f_ha2");
const ha3 = document.querySelector(".pic_f_ha3");
const ha4 = document.querySelector(".pic_f_ha4");
const ha5 = document.querySelector(".pic_f_ha5");
const ha6 = document.querySelector(".pic_f_ha6");
const ha7 = document.querySelector(".pic_f_ha7");
const ha8 = document.querySelector(".pic_f_ha8");
const ha9 = document.querySelector(".pic_f_ha9");
const ha10 = document.querySelector(".pic_f_ha10");
const ha11 = document.querySelector(".pic_f_ha11");
const ha12 = document.querySelector(".pic_f_ha12");

function getLocation() {
  if (ha_locations_lo.innerText == "현재 정문을 지나고 있습니다.") {
    ha1.innerText = `●`;
  } else if (ha_locations_lo.innerText == "현재 약학대학을 지나고 있습니다.") {
    ha1.innerText = `○`;
    ha2.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 해대 1호관을 지나고 있습니다."
  ) {
    ha2.innerText = `○`;
    ha3.innerText = `●`;
  } else if (ha_locations_lo.innerText == "현재 본관을 지나고 있습니다.") {
    ha3.innerText = `○`;
    ha4.innerText = `●`;
  } else if (ha_locations_lo.innerText == "현재 학생회관을 지나고 있습니다.") {
    ha4.innerText = `○`;
    ha5.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 인문대 서쪽을 지나고 있습니다."
  ) {
    ha5.innerText = `○`;
    ha6.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 학생생활관을 지나고 있습니다."
  ) {
    ha6.innerText = `○`;
    ha7.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 인문대 동쪽을 지나고 있습니다."
  ) {
    ha7.innerText = `○`;
    ha8.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 중앙도서관을 지나고 있습니다."
  ) {
    ha8.innerText = `○`;
    ha9.innerText = `●`;
  } else if (ha_locations_lo.innerText == "현재 의과대학을 지나고 있습니다.") {
    ha9.innerText = `○`;
    ha10.innerText = `●`;
  } else if (
    ha_locations_lo.innerText == "현재 공대 4호관을 지나고 있습니다."
  ) {
    ha10.innerText = `○`;
    ha11.innerText = `●`;
  } else if (ha_locations_lo.innerText == "현재 교양동을 지나고 있습니다.") {
    ha11.innerText = `○`;
    ha12.innerText = `●`;
  } else {
    ha12.innerText = `○`;
  }
}
