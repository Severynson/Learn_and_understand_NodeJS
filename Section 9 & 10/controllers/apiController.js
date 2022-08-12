const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

module.exports = function (app) {
  app.get("/api/person/:id", (req, res) => {
    // get that data from database;
    res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.post("/api/person", jsonParser, (req, res) => {
    // save to the database;
  });

  app.delete("/api/person/:id", (req, res) => {
    // delete from the database;
  });
};
