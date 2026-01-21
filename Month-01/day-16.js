// - **Day 16:** Reverse a number

function reverseNumber(num) {
  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10; // last digit nikali
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10); // last digit hata diya
  }

  return reverse;
}

console.log(reverseNumber(1234)); // 4321
