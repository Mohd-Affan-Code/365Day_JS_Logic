// **Day 5:** Find the largest among three numbers

let a = 100;
let b = 25;
let c = 15;

let largest;

if (a > b && a > c) {
  largest = a;
} else if (b > a && b > c) {
  largest = b;
} else {
  largest = c;
}

console.log(largest);
