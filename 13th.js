// function statement

function statement() {
    console.log("a called");
}
statement();

// function expression a.k.a. function declaration

var b = function () {
    console.log("b called");
}
b();

// anonymous function

// function () {

// }

// Named Function Expression

var c = function Named() {
    console.log("Named Function Expression called");
}
c();
// Named(); // Reference error in this line

// First Class Functions/Citizens

var d = function (param1) {
    console.log(param1);
}

d(function () {});
