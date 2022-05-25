const a_locations_lo = document.querySelector(".current_location_a");
const b_locations_lo = document.querySelector(".current_location_b");
const a1 = document.querySelector(".pic_f_a1");
const a2 = document.querySelector(".pic_f_a2");
const a3 = document.querySelector(".pic_f_a3");
const a4 = document.querySelector(".pic_f_a4");
const a5 = document.querySelector(".pic_f_a5");
const a6 = document.querySelector(".pic_f_a6");
const a7 = document.querySelector(".pic_f_a7");
const a8 = document.querySelector(".pic_f_a8");
const a9 = document.querySelector(".pic_f_a9");
const a10 = document.querySelector(".pic_f_a10");
const a11 = document.querySelector(".pic_f_a11");
const a12 = document.querySelector(".pic_f_a12");
const b1 = document.querySelector(".pic_f_b1");
const b2 = document.querySelector(".pic_f_b2");
const b3 = document.querySelector(".pic_f_b3");
const b4 = document.querySelector(".pic_f_b4");
const b5 = document.querySelector(".pic_f_b5");
const b6 = document.querySelector(".pic_f_b6");
const b7 = document.querySelector(".pic_f_b7");
const b8 = document.querySelector(".pic_f_b8");
const b9 = document.querySelector(".pic_f_b9");
const b10 = document.querySelector(".pic_f_b10");
const b11 = document.querySelector(".pic_f_b11");
const b12 = document.querySelector(".pic_f_b12");

function getLocation() {
  if (a_locations_lo.innerText == "현재 정문을 지나고 있습니다.") {
    a1.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 약학대학을 지나고 있습니다.") {
    a1.innerText = `○`;
    a2.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 해대 1호관을 지나고 있습니다.") {
    a2.innerText = `○`;
    a3.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 본관을 지나고 있습니다.") {
    a3.innerText = `○`;
    a4.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 학생회관을 지나고 있습니다.") {
    a4.innerText = `○`;
    a5.innerText = `●`;
  } else if (
    a_locations_lo.innerText == "현재 인문대 서쪽을 지나고 있습니다."
  ) {
    a5.innerText = `○`;
    a6.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 학생생활관을 지나고 있습니다.") {
    a6.innerText = `○`;
    a7.innerText = `●`;
  } else if (
    a_locations_lo.innerText == "현재 인문대 동쪽을 지나고 있습니다."
  ) {
    a7.innerText = `○`;
    a8.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 중앙도서관을 지나고 있습니다.") {
    a8.innerText = `○`;
    a9.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 의과대학을 지나고 있습니다.") {
    a9.innerText = `○`;
    a10.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 공대 4호관을 지나고 있습니다.") {
    a10.innerText = `○`;
    a11.innerText = `●`;
  } else if (a_locations_lo.innerText == "현재 교양동을 지나고 있습니다.") {
    a11.innerText = `○`;
    a12.innerText = `●`;
  } else {
    a12.innerText = `○`;
  }
  if (b_locations_lo.innerText == "현재 정문을 지나고 있습니다.") {
    b1.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 약학대학을 지나고 있습니다.") {
    b1.innerText = `○`;
    b2.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 해대 1호관을 지나고 있습니다.") {
    b2.innerText = `○`;
    b3.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 교양동을 지나고 있습니다.") {
    b3.innerText = `○`;
    b4.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 공대 4호관을 지나고 있습니다.") {
    b4.innerText = `○`;
    b5.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 의과대학을 지나고 있습니다.") {
    b5.innerText = `○`;
    b6.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 중앙도서관을 지나고 있습니다.") {
    b6.innerText = `○`;
    b7.innerText = `●`;
  } else if (
    b_locations_lo.innerText == "현재 인문대 동쪽을 지나고 있습니다."
  ) {
    b7.innerText = `○`;
    b8.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 학생생활관을 지나고 있습니다.") {
    b8.innerText = `○`;
    b9.innerText = `●`;
  } else if (
    b_locations_lo.innerText == "현재 인문대 서쪽을 지나고 있습니다."
  ) {
    b9.innerText = `○`;
    b10.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 학생회관을 지나고 있습니다.") {
    b10.innerText = `○`;
    b11.innerText = `●`;
  } else if (b_locations_lo.innerText == "현재 본관을 지나고 있습니다.") {
    b11.innerText = `○`;
    b12.innerText = `●`;
  } else {
    b12.innerText = `○`;
  }
}

setInterval(getLocation, 1000);
