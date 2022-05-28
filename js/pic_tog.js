const toggle_a = document.querySelector(".current_l_a");
const toggle_pic_a = document.querySelector(".current_l_pic_a");
const toggle_b = document.querySelector(".current_l_b");
const toggle_pic_b = document.querySelector(".current_l_pic_b");
const toggle_c = document.querySelector(".current_l_c");
const toggle_pic_c = document.querySelector(".current_l_pic_c");
const toggle_d = document.querySelector(".current_l_d");
const toggle_pic_d = document.querySelector(".current_l_pic_d");

function handlePicClick_a() {
  toggle_pic_a.classList.toggle("hidden");
}

function handlePicClick_b() {
  toggle_pic_b.classList.toggle("hidden");
}
function handlePicClick_c() {
  toggle_pic_c.classList.toggle("hidden");
}
function handlePicClick_d() {
  toggle_pic_d.classList.toggle("hidden");
}

toggle_a.addEventListener("click", handlePicClick_a);
toggle_b.addEventListener("click", handlePicClick_b);
toggle_c.addEventListener("click", handlePicClick_c);
toggle_d.addEventListener("click", handlePicClick_d);
