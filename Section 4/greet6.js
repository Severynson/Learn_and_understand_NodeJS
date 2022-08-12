// // This will not work because we are breaking reference by link;
// // We are assigning to exports another object (functions are specific objects);
// // So it is not === module.exports object antmore...
// // Instead of assigning we can using it just to assign key-value;
// // pairs to an exports object (mutate it instead of reasigning);

// exports = function () {
//   console.log("Hello");
// };

// console.log(exports);
// console.log(module.exports);

////////////////////////////////////////////

// Instead

exports.greet = () => void console.log("Hello");
