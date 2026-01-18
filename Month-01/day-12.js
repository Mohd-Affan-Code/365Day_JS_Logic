//- **Day 12:** Find sum of numbers from 1 to N

function sumofN(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}

sumofN(10);
