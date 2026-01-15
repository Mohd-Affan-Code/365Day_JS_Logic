//- **Day 8:** Create a simple calculator (+, −, ×, ÷)

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "/":
      if (num2 === 0) {
        return "Division by zero is not allowed";
      }
      result = num1 / num2;
      break;

    default:
      return "Invalid operator";
  }
  return result;
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 0, "/")); // Error message
