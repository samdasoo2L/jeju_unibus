const toggle_lo_bt = document.querySelector(".fixed_bu_lo");
const toggle_tt_bt = document.querySelector(".fixed_bu_tt");
const toggle_target_a = document.querySelector(".course_a");
const toggle_target_b = document.querySelector(".course_b");
const toggle_target_c = document.querySelector(".course_c");
const toggle_target_d = document.querySelector(".course_d");

const bt_hidden = "bt_hidden";
const click_col = "click_col";

function handlebtClick_lo() {
  toggle_lo_bt.classList.add(click_col);
  toggle_tt_bt.classList.remove(click_col);
  toggle_target_a.classList.remove(bt_hidden);
  toggle_target_b.classList.remove(bt_hidden);
  toggle_target_c.classList.add(bt_hidden);
  toggle_target_d.classList.add(bt_hidden);
}
function handlebtClick_tt() {
  toggle_tt_bt.classList.add(click_col);
  toggle_lo_bt.classList.remove(click_col);
  toggle_target_a.classList.add(bt_hidden);
  toggle_target_b.classList.add(bt_hidden);
  toggle_target_c.classList.remove(bt_hidden);
  toggle_target_d.classList.remove(bt_hidden);
}

toggle_lo_bt.addEventListener("click", handlebtClick_lo);
toggle_tt_bt.addEventListener("click", handlebtClick_tt);
