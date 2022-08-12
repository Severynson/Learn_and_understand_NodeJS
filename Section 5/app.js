// // object properties and methods;
// var obj = {
//   greet: "Hello",
// };

// console.log(obj.greet);
// console.log(obj["greet"]);
// var prop = "greet";
// console.log(obj[prop]);

// var arr = [];

// arr.push(
//   function () {
//     console.log("Hello world 1");
//   },
//   function () {
//     console.log("Hello world 2");
//   },
//   function () {
//     console.log("Hello world 3");
//   }
// );

// arr.forEach((item) => void item());

//////////////////////////////////////////

// var Emitter = require("./emitter");
// var emtr = new Emitter();

// emtr.on("greet", function () {
//   console.log("Somewhere, someone said hello.");
// });

// emtr.on("greet", function () {
//   console.log("A greeting occurred!");
// });

// console.log("Hello!");
// emtr.emit("greet");

//////////////////////////////////////////

// var Emitter = require("events");
// var eventConfig = require("./config").events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function () {
//   console.log("Somewhere, someone said hello.");
// });

// emtr.on(eventConfig.GREET, function () {
//   console.log("A greeting occurred!");
// });

// console.log("Hello!");
// emtr.emit(eventConfig.GREET);

//////////////////////////////////////////

// var person = {
//   firstname: "",
//   lastname: "",
//   greet: function () {
//     return "Hello " + this.firstname + " " + this.lastname + "!";
//   },
// };

// var john = Object.create(person);
// var jane = Object.create(person);
// console.log(john);
// john.firstname = "John";
// john.lastname = "Doe";
// // // // // // // // //
// jane.firstname = "Jane";
// jane.lastname = "Doe";

// console.log(john);
// console.log(john.__proto__);
// console.log(jane);
// console.log(jane.__proto__);
// console.log(john.greet());
// console.log(jane.greet());

//////////////////////////////////////////

// var EventEmitter = require("events");
// var util = require("util");

// function Greetr() {
//   this.greeting = "Hello world!";
// }

// // This:
// util.inherits(Greetr, EventEmitter);
// // Is the same as this:
// Greetr.prototype = Object.create(EventEmitter.prototype);

// Greetr.prototype.greet = function (data) {
//   console.log(this.greeting + ": " + data);
//   this.emit("greet", data);
// };

// var greeter1 = new Greetr();

// greeter1.on("greet", function (data) {
//   console.log("Someone greeted!: " + data);
// });

// greeter1.greet("Severyn");

//////////////////////////////////////////

// var anotherObj = {
//   name: "Severyn Kurach",
// };

// var obj = {
//   name: "John Doe",
//   greet: function () {
//     console.log(`Hello ${this.name}!`);
//   },
// };

// obj.greet();
// obj.greet.call(anotherObj);
// obj.greet.call({ name: "Andrew" }, "params...");
// obj.greet.apply({ name: "Andrew" }, ["params, more_params, ..."]);

// function Person(paramObject) {
//   return function (name, surname) {
//     this.__proto__ = Person.prototype;
//     console.log(this);

//     this.name = name;
//     this.surname = surname;

//     return this;
//   }.bind(paramObject);
// }

// Person.prototype.hello = function () {
//   console.log(`Hi, I'm ${this.name} ${this.surname}!`);
// };

// const susan = Person({})("Susan", "Li");
// console.log(susan);
// susan.hello();

//////////////////////////////////////////

// var EventEmitter = require("events");
// var util = require("util");

// function Greetr() {
//   EventEmitter.call(this);
//   this.greeting = "Hello world!";
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function (data) {
//   console.log(this.greeting + ": " + data);
//   this.emit("greet", data);
// };

// var greeter1 = new Greetr();

// greeter1.on("greet", function (data) {
//   console.log("Someone greeted!: " + data);
// });

// greeter1.greet("Severyn");

//////////////////////////////////////////

// const util = require("util");

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.greet = function () {
//   console.log("Hello " + this.firstname + " " + this.lastname + "!");
// };

// function Policeman(badgenumber, PersonProps) {
//   Person.apply(this, PersonProps);
//   this.badgenumber = badgenumber;
// }

// util.inherits(Policeman, Person);

// const officer = new Policeman(1234, ["John", "Doe"]);
// officer.greet();
// console.log(officer);

//////////////////////////////////////////
("use strict");

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}!`);
  }
}

const severyn = new Person("Severyn", "Kurach");
severyn.greet();

class Policeman extends Person {
  constructor(id, firstname, lastname) {
    super(firstname, lastname);
    this.id = id;
  }
}

const officer = new Policeman("1", "Severyn", "Kurach");
console.log(officer);
