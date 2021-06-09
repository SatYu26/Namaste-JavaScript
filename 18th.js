// function x() {
//   console.log("Namaste");
// }

// // y here is a higher order function as it takes another function as an argument and returns it.
// function y(x) {
//   x();
// }

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// const calculate = function (arr, logic) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]));
//   }
//   return output;
// };

console.log(radius.map(area));

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, area));

//  creating our own version of Map using higher order functions

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
