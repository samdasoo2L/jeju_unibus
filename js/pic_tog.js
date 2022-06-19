const toggle_a = document.querySelector(".current_l_a");
const toggle_pic_a = document.querySelector(".current_l_pic_a");
const toggle_b = document.querySelector(".current_l_b");
const toggle_pic_b = document.querySelector(".current_l_pic_b");
const toggle_c = document.querySelector(".current_l_c");
const toggle_pic_c = document.querySelector(".current_l_pic_c");
const toggle_d = document.querySelector(".current_l_d");
const toggle_pic_d = document.querySelector(".current_l_pic_d");
const toggle_night = document.querySelector(".current_l_night");
const toggle_pic_night = document.querySelector(".current_l_pic_night");
const toggle_night_tog = document.querySelector(".current_l_night_tog");
const toggle_pic_night_tog = document.querySelector(".current_l_pic_night_tog");
const toggle_map = document.querySelector(".current_l_map");
const toggle_pic_map = document.querySelector(".current_l_pic_map");
const toggle_Q = document.querySelector(".current_l_Q");
const toggle_pic_Q = document.querySelector(".current_l_pic_Q");

function handlePicClick_a() {
  toggle_pic_a.classList.toggle("hidden_90");
}
function handlePicClick_b() {
  toggle_pic_b.classList.toggle("hidden_90");
}
function handlePicClick_night() {
  toggle_pic_night.classList.toggle("hidden_30");
}

function handlePicClick_c() {
  toggle_pic_c.classList.toggle("hidden_100");
}
function handlePicClick_d() {
  toggle_pic_d.classList.toggle("hidden_100");
}
function handlePicClick_night_tog() {
  toggle_pic_night_tog.classList.toggle("hidden_100");
}

function handlePicClick_map() {
  toggle_pic_map.classList.toggle("hidden_50");
}
function handlePicClick_Q() {
  toggle_pic_Q.classList.toggle("hidden_10");
}

toggle_a.addEventListener("click", handlePicClick_a);
toggle_b.addEventListener("click", handlePicClick_b);
toggle_c.addEventListener("click", handlePicClick_c);
toggle_d.addEventListener("click", handlePicClick_d);
toggle_night.addEventListener("click", handlePicClick_night);
toggle_night_tog.addEventListener("click", handlePicClick_night_tog);
toggle_map.addEventListener("click", handlePicClick_map);
toggle_Q.addEventListener("click", handlePicClick_Q);
