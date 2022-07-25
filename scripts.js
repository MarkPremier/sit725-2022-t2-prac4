const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var port = process.env.port || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.sendFile("index.html");
});

app.post("/", (req, res) => {
  var numberone = parseInt(req.body.integer1);
  var numbertwo = parseInt(req.body.integer2);
  var add = numberone + numbertwo;

  res.write("<p>The value is " + add + "</p>");
  res.write(
    `<p>Want to add another number? Please click here: <a href="/">Return</a></p>`
  );
  res.send();
});

app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
  console.log("Type Ctrl+C to shut down the web server");
});
