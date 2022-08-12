const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/", (req, res) => {
    // res.send(
    //   "<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><boby><h1>Hello world!</h1></body></html>"
    // );
    res.render("index");
  });

  app.get("/person/:id", (req, res) => {
    // res.send(
    //   "<html><head></head><boby><h1>Person: " +
    //     req.params.id +
    //     "</h1></body></html>"
    // );
    res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.post("/person", urlencodedParser, (req, res) => {
    res.send("Thank you!");
    console.log(req.body);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
};
