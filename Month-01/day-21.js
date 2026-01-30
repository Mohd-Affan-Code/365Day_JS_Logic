// count the frequency of array

let arr = [1, 2, 3, 3, 4, 6];

let freq = {};

for (num of arr) {
  if (freq[num] === undefined) {
    freq[num] = 1;
  } else {
    freq[num] = freq[num] + 1;
  }
}
console.log(freq);
