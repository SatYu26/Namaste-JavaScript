// let multiply = function (x, y) {
//     console.log(x*y);
// }

// let multiplyTwo = multiply.bind(this, 2);
// multiplyTwo(5);

let multiply = function (x) {
    return function (y) {
        console.log(x*y);
    }
}

let multiplyTwo = multiply(2);
multiplyTwo(6);