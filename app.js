var express = require("express");
var bodyParser = require("body-parser");
var app = express();

Array.prototype.contains = value => {
  if (value == null || value === undefined) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (value === this[i]) return true;
  }
  return false;
};

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(request, response) {
  response.send("OK");
});

app.post("/GetData", function(req, res) {
  console.log("Posted GetData");
  var key = req.body.key;
});

app.listen(80, function() {
  console.log("Listening on port 80");
});
