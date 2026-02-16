// - **Day 1:** Find duplicates in an array

const arr = [1, 2, 3, 4, 2, 5, 3, 6];

const freq = {};
const duplicates = [];

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}

for (let key in freq) {
  if (freq[key] > 1) {
    duplicates.push(Number(key));
  }
}

console.log(duplicates); // [2, 3]
