// What is a Callback function in JavaScript

// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

function attachEventListners() {
    let count = 0;

    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("button clicked", ++count);
        });
}

attachEventListners();

