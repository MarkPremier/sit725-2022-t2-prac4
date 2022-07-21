const express = require("express");
const bodyparser=require('body-parser');
const { PassThrough } = require("stream");
const path = require("path");
var app = express();
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
app.use(bodyparser.urlencoded({extended:true}))

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;

  }
  

app.get('', (req,res)=>{
res.sendFile("index.html",{ root: path.join(__dirname,'../')})
});

app.post('/',(req,res)=>{
  const numberone = Number(req.body.integer1);
  const numbertwo = Number(req.body.integer2);
  const add = numberone + numbertwo;

    res.write("<p>The value is "+ add +"</p>");

    res.write(`<p>Want to add another number? Please click here: <a href="/">Return</a></p>`);
    res.send();
})




app.listen(port, function () {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log("Type Ctrl+C to shut down the web server");
    });