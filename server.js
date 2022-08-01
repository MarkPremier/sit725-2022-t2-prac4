var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;


app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
  console.log("Type Ctrl+C to shut down the web server");
});
