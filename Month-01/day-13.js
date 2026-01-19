//- **Day 13:** Print multiplication table of a number

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

table(5);
