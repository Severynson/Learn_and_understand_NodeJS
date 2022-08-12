const Todos = require("../models/todoModel");

module.exports = (app) => {
  app.get("/api/setupTodos", (req, res) => {
    // seed database;
    const starterTodos = [
      {
        username: "test",
        todo: "Buy whey protein",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "Feed my cat",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "Learn Node",
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};
