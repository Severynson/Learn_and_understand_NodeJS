var moment = require("moment");
console.log(moment().format("ddd, hA"));

const EventEmitter = function (newObject) {
  newObject.__proto__ = EventEmitter.prototype;

  return function (events) {
    this.events = events || {};

    return this;
  }.bind(newObject);
};

EventEmitter.prototype.on = function (eventName, listenerFunction) {
  this.events[eventName]
    ? this.events[eventName].push(listenerFunction)
    : (this.events[eventName] = []),
    this.events[eventName].push(listenerFunction);
};

EventEmitter.prototype.emit = function (eventName) {
  this.events[eventName].forEach((event, index) => {
    console.log("preparing for event NUMBER " + index);
    event();
    console.log("Event done");
  });
};

const events = EventEmitter({})();

console.log(events);

events.on("timeLoggers", () => {
  console.log(
    "11 This function was executed at: " + moment().format("ddd, hm")
  );
});

events.on("timeLoggers", () => {
  console.log(
    "22 This function was executed at: " + moment().format("ddd, hA")
  );
});

events.emit("timeLoggers");

console.log(events);
