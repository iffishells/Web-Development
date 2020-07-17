// window.alert("its done")
//
// document.getElementById("inner_circle").style.borderColor = "red";

sleep();
var sleep_Var;
function sleep() {
  sleep_Var = setInterval(change_color, 1000);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

function change_color() {
  var list_color = [
    "#3b2e5a",
    "#394989",
    "#e84a5f",
    "#14b1ab",
    "#6a2c70",
    "#654062",
    "#1b262c",
    "#595238",
    "#f1c5c5",
    "#2f2519",
    "#111d5e",
    "#436f8a",
    "#b6eb7a"
  ];
  document.getElementById("iffishells").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("outer_block").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_circle").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_block_2").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_block_3").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_block_4").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_block_5").style.borderColor = list_color[getRandomInt(0, 13)];
  document.getElementById("inner_circle").style.color = list_color[getRandomInt(0, 4)];

}
