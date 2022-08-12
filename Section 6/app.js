// const buf = new Buffer("Hello", "utf8");
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2]);

// buf.write("wo");
// console.log(buf);
// console.log(buf.toString());

//////////////////////////////////////////

// const buffer = new ArrayBuffer(8);
// var view = new Int32Array(buffer);

// view[0] = 5;
// view[1] = 15;

// console.log(buffer);
// console.log(view);

//////////////////////////////////////////

// function greet(callback) {
//   console.log("Hello!");
//   callback();
// }

// greet(function () {
//   console.log("The callback was invoked!");
// });

// greet(function () {
//   console.log("A different callback was invoked!");
// });

//////////////////////////////////////////

// const fs = require("fs");

// var greet = fs.readFileSync(`${__dirname}/greet.txt`, "utf8");
// console.log(greet);

// var greet2 = fs.readFile(`${__dirname}/greet.txt`, "utf8", (err, data) => {
//   if (err) throw "Ooops! Some error happened while file reading.";
//   else console.log(data);
// });

// console.log("Done");

//////////////////////////////////////////

// const fs = require("fs");

// var readable = fs.createReadStream(__dirname + "/greet.txt", {
//   encoding: "utf-8",
//   highWaterMark: 32 * 1024,
// });

// const writable = fs.createWriteStream(`${__dirname}/goodby.txt`, (x) => {
//   console.log("----Writable_created----");
//   console.log("Writable callback argument: ", x);
// });

// readable.on("data", (chunk) => {
//   // console.log(chunk);
//   console.log(chunk.length);
//   writable.write("Goodby|");
//   writable.write(chunk.length.toString() + "|");
// });

//////////////////////////////////////////

const fs = require("fs");
const { gzip } = require("zlib");

var readable = fs.createReadStream(
  __dirname + "/greet.txt"
  // , {
  //   encoding: "utf-8",
  //   highWaterMark: 32 * 1024,
  // }
);

const writable1 = fs.createWriteStream(`${__dirname}/goodby1.txt`);

const writable2 = fs.createWriteStream(`${__dirname}/goodby2.txt`);

const compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");

readable.pipe(writable1);

readable.pipe(gzip).pipe(compressed);
