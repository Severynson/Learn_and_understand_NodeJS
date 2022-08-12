const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiController = require("./controllers/apiController");
const htmlController = require("./controllers/htmlController");

const port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

app.use("/assets", express.static(`${__dirname}/public`));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
});

htmlController(app);

app.post("/personjson", jsonParser, (req, res) => {
  res.send("Thank you for the JSON data.");
  console.log(
    `${req.body.firstname} ${req.body.lastname} - a response from PeRsOnJsOn`
  );
});

app.get("/api", (req, res) => {
  res.json({ firstname: "John", lastname: "Doe" });
});

apiController(app);

app.listen(port);
