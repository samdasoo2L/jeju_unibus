const toggle_lo_bt = document.querySelector(".fixed_bu_lo");
const toggle_target_ha = document.querySelector(".course_ha");
const toggle_target_a = document.querySelector(".course_a");
const toggle_target_b = document.querySelector(".course_b");
// const toggle_target_night = document.querySelector(".course_night");

const toggle_tt_bt = document.querySelector(".fixed_bu_tt");
const toggle_target_ha_tt = document.querySelector(".course_ha_tt");
const toggle_target_c = document.querySelector(".course_c");
const toggle_target_d = document.querySelector(".course_d");
const toggle_target_night_tt = document.querySelector(".course_night_tt");

const toggle_t_bt = document.querySelector(".fixed_bu_t");
const toggle_target_map = document.querySelector(".course_map");
const toggle_target_Q = document.querySelector(".course_Q");

const bt_hidden = "bt_hidden";
const click_col = "click_col";

function handlebtClick_lo() {
  toggle_tt_bt.classList.remove(click_col);
  toggle_target_ha_tt.classList.add(bt_hidden);
  toggle_target_c.classList.add(bt_hidden);
  toggle_target_d.classList.add(bt_hidden);
  toggle_target_night_tt.classList.add(bt_hidden);

  toggle_t_bt.classList.remove(click_col);
  toggle_target_map.classList.add(bt_hidden);
  toggle_target_Q.classList.add(bt_hidden);

  toggle_lo_bt.classList.add(click_col);
  toggle_target_a.classList.remove(bt_hidden);
  toggle_target_b.classList.remove(bt_hidden);
  // toggle_target_night.classList.remove(bt_hidden);
  toggle_target_ha.classList.remove(bt_hidden);
}
function handlebtClick_tt() {
  toggle_lo_bt.classList.remove(click_col);
  toggle_target_a.classList.add(bt_hidden);
  toggle_target_b.classList.add(bt_hidden);
  // toggle_target_night.classList.add(bt_hidden);
  toggle_target_ha.classList.add(bt_hidden);

  toggle_t_bt.classList.remove(click_col);
  toggle_target_map.classList.add(bt_hidden);
  toggle_target_Q.classList.add(bt_hidden);

  toggle_tt_bt.classList.add(click_col);
  toggle_target_ha_tt.classList.remove(bt_hidden);
  toggle_target_c.classList.remove(bt_hidden);
  toggle_target_d.classList.remove(bt_hidden);
  toggle_target_night_tt.classList.remove(bt_hidden);
}

function handlebtClick_t() {
  toggle_lo_bt.classList.remove(click_col);
  toggle_target_a.classList.add(bt_hidden);
  toggle_target_b.classList.add(bt_hidden);
  // toggle_target_night.classList.add(bt_hidden);
  toggle_target_ha.classList.add(bt_hidden);

  toggle_tt_bt.classList.remove(click_col);
  toggle_target_ha_tt.classList.add(bt_hidden);
  toggle_target_c.classList.add(bt_hidden);
  toggle_target_d.classList.add(bt_hidden);
  toggle_target_night_tt.classList.add(bt_hidden);

  toggle_t_bt.classList.add(click_col);
  toggle_target_map.classList.remove(bt_hidden);
  toggle_target_Q.classList.remove(bt_hidden);
}

toggle_lo_bt.addEventListener("click", handlebtClick_lo);
toggle_tt_bt.addEventListener("click", handlebtClick_tt);
toggle_t_bt.addEventListener("click", handlebtClick_t);
