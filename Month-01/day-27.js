//- **Day 27:** Check whether a string is palindrome
let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
