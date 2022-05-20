const toggle_a = document.querySelector(".current_l_a");
const toggle_pic_a = document.querySelector(".current_l_pic_a");
const toggle_b = document.querySelector(".current_l_b");
const toggle_pic_b = document.querySelector(".current_l_pic_b");

function handlePicClick_a() {
  toggle_pic_a.classList.toggle("hidden");
}

function handlePicClick_b() {
  toggle_pic_b.classList.toggle("hidden");
}

toggle_a.addEventListener("click", handlePicClick_a);
toggle_b.addEventListener("click", handlePicClick_b);
