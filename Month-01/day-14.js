//- **Day 14:** Find factorial of a number

function fact(num) {
  let facto = 1;
  for (let i = 1; i <= num; i++) {
    // console.log(object)
    facto *= i;
  }
  console.log(facto);
}

fact(5);
