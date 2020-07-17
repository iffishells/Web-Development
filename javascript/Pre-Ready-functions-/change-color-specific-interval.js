sleep();
  var sleep_Var ;
  function sleep()
  {
      sleep_Var = setInterval(change_color , 4000)
  }
  function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

  function change_color()
  {
      var list_color = ["#3b2e5a", "#394989", "#e84a5f", "#14b1ab" , "#6a2c70"];
      document.getElementById("main_heading").style.color = list_color[getRandomInt(0,4)];
  }
