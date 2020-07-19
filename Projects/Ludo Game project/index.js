function call_dice() {
  sleep();
}
var sleep_Var;
function stop() {
  console.log("stop has been called")
  clearInterval(sleep_Var);
    document.getElementById("tone").pause()

}

function sleep() {
  console.log("sleep function has been called");
  sleep_Var = setInterval(play_change_dot, 50);
    document.getElementById("tone").play()
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive

}

function play_change_dot() {
  var image_list = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ]
  var image_number = image_list[getRandomInt(0, 5)];
  document.getElementById('rotation-dice-below').src = image_number;

}
