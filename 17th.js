console.log("start");

setTimeout(function cb() {
    console.log("callback");
}, 5000);

console.log("End");

// millions of lines


// Blocking the main thread

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate <= startDate +10000) {
    endDate = new Date().getTime();
}

console.log("While Expires");