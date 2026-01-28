//- **Day 20:** Find sum of digits of a number

function sumOfDigits(num) {
  let sum = 0;
  let str = num.toString();

  for (let digit of str) {
    sum += Number(digit);
  }

  return sum;
}

console.log(sumOfDigits(5678)); // 26
