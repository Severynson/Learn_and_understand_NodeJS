// // function statement;
// function greet() {
//   console.log("hi");
// }
// greet();

// // function are first-class;
// function logGreeting(fn) {
//   fn();
// }

// logGreeting(greet);

// // function expression;
// var greetMe = function () {
//   console.log("Hi Severyn!");
// };
// greetMe();

// // it's first-class;
// logGreeting(greetMe);

// // use a function expression on the fly;
// logGreeting(function () {
//   console.log("Hello Severyn!");
// });

/////////////////////////////////////////////////////

// const greet = require("./greet");
// greet();

/////////////////////////////////////////////////////

// var person = {
//   firstname: "John",
//   lastname: "Doe",
//   greet: function () {
//     console.log("Hello, " + this.firstname + " " + this.lastname);
//   },
// };

// person.greet();

// console.log(person["firstname"]);

/////////////////////////////////////////////////////

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.greet = function () {
//   console.log("Hello, " + this.firstname + " " + this.lastname + ".");
// };

// var john = new Person("John", "Doe");
// var jane = new Person("Jane", "Doe");
// console.log(john.firstname);
// john.greet();
// jane.greet();

// console.log(john.__proto__);
// console.log(jane.__proto__);
// console.log(jane.__proto__ === john.__proto__);

/////////////////////////////////////////////////////

// // pass by value;
// function change(b) {
//   b = 2;
// }

// var a = 1;
// change(a);
// console.log(a);
// // nothing happened here because "a" is a primitive;

// // but objects will behave another way;

// // pass by reference;
// function changeObj(d) {
//   d.prop1 = function () {};
//   d.prop2 = {};
// }

// var c = {};
// changeObj(c);
// console.log(c);

// function changeArr(d) {
//   d[0] = function () {};
//   d[1] = "Severyn";
//   d[2] = 1;
//   d[3] = false;
//   d[4] = null;
//   d[5] = undefined;
// }

// var e = [];
// changeArr(e);
// console.log(e);

/////////////////////////////////////////////////////

// // scopes work this way:
// var firstname = "Jane";

// (function (lastname) {
//   var firstname = "John";
//   console.log(firstname);
//   console.log(lastname);
// })("Doe");

// console.log(firstname);

/////////////////////////////////////////////////////

// var greet = require("./index");
// console.log(greet);

// greet.english();
// greet.spanish();

/////////////////////////////////////////////////////

// // Different ways for import modules;

// var greet1 = require("./greet1");
// greet1();

// var { greet: greet2 } = require("./greet2");
// greet2();

// // This will not work // var { greet: greet3 } = require("./greet3");

// // Just this will work;
// var greet3a = require("./greet3");
// greet3a.greet();
// greet3a.greeting = "Changed hello world!";

// // Can cause some confussion...
// var greet3b = require("./greet3");
// greet3b.greet();

/////////////////////////////////////////////////////

// If you want two different objects instead (no cashing exports)...;

// var greet4 = require("./greet4");
// var grtr1 = new greet4();
// var grtr2 = new greet4();
// grtr1.greet();
// grtr1.greeting = "Changed hello world";
// console.log(grtr1.greeting);
// grtr2.greet();

/////////////////////////////////////////////////////

// var greet5 = require("./greet5").greet;
// greet5();

/////////////////////////////////////////////////////

// var { greet6 } = require("./greet6");
// greet6();

/////////////////////////////////////////////////////

var util = require("util");
var name = "Tony";
var greeting = util.format("Hello, %s", name, "!");
util.log(greeting);

/////////////////////////////////////////////////////
