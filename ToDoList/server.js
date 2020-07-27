const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const ejs = require('ejs');
app.use(express.static(path.join(__dirname, 'public'))); //static files
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs") // for setting to ejs tempalte

app.get("/", function(req, resp) {
  var date = new Date()
  CurrentDay = date.getDay()
  var day = ""
  if (CurrentDay == 0) {
    day = "Monday"

  }
  if (CurrentDay == 1) {
    day = "Tuesday"

  }
  if (CurrentDay == 2) {
    day = "Wednessday"

  }
  if (CurrentDay == 3) {
    day = "thursday"

  }
  if (CurrentDay == 4) {
    day = "friday"

  }
  if (CurrentDay == 5) {
    day = "Sturday"
  }
  if (CurrentDay == 6) {
    day = "Sunday"
  }

  resp.render("list", {kingOfDay: day})
});

// app.post("/", function(req, resp) {});

app.listen(3000, function(req, resp) {
  console.log("your's  is listen at 3000 ports");
})
