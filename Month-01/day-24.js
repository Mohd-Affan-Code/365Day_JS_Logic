//- **Day 24:** Reverse an array without using `reverse()`

let arr = [1, 2, 3, 4, 5, 6];
let reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log(reverse);
