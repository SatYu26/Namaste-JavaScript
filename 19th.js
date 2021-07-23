const arr = [5, 1, 3, 2, 6];

// MAP Function

function double(x) {
  return x * 2;
}

const output = arr.map((x) => {
  return x * 2;
});
console.log(output);

//  Filter Function

// filter odd values

function isOdd(x) {
  return x % 2 === 1;
}

const output = arr.filter(isOdd);
console.log(output);

//  Reduce Function

// sum or max

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);

console.log(output);
