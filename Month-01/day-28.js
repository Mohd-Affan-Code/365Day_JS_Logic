// - **Day 28:** Count vowels in a string

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(countVowels("JavaScript")); // 3
