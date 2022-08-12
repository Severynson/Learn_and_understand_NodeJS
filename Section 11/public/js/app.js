angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc() {
  this.message = "Hello";

  this.people = clientPeople;
  //   [
  //     { name: "John Doe" },
  //     { name: "Jane Doe" },
  //     { name: "Jim Doe" },
  //   ];
}
