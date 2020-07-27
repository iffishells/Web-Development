const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const ejs = require('ejs');
app.use(express.static(path.join(__dirname, 'public'))); //static files
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs") // for setting to ejs tempalte
//global variable
var set_items

const option = {
  weekday : "long" ,
  year : 'numeric',
  month : "long" ,
  day : "numeric"
}
app.get("/", function(req, resp) {

  var date = new Date()

  CurrentDate = date.toLocaleDateString('en-US',option)

  console.log("root has been called");
  resp.render("list", {kingOfDay: CurrentDate ,
                        newitem : set_items} )
});

app.post("/", function(req, resp) {
  console.log("root post has been called");
   set_items = req.body.set_items
   console.log(set_items);
    resp.redirect("/")
});

app.listen(3000, function(req, resp) {
  console.log("your's  is listen at 3000 ports");
})
