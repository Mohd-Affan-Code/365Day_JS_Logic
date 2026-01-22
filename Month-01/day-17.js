// - **Day 17:** Check whether a number is palindrome

function isPalindrome(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  if (original === reverse) {
    console.log(`${original} is a Palindrome`);
  } else {
    console.log(`${original} is NOT a Palindrome`);
  }
}

isPalindrome(121);
isPalindrome(567);
