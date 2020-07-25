const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public'))); //static files

app.use(bodyParser.urlencoded({extended : true}));

//root
app.get("/", function(req, resp) {
  resp.sendFile(__dirname + "index.html")

});

app.post("/", function(req, resp) {
  console.log("post method has been called");
  // resp.send("Okies")
  const n1 = req.body.num1
  const n2 =  req.body.num2
  const result = n1 +n2
  console.log(resp.send("The out put is " + result));
});

app.listen(3000, function(req, resp) {
  console.log("your's  is listen at 3000 ports");
})
