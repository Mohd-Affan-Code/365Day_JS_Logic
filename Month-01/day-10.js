//- **Day 10:** Check whether a character is vowel or consonant

function checkVowel(char) {
  let vowels = "aeiou";

  if (vowels.includes(char.toLowerCase())) {
    console.log("vowel");
  } else {
    console.log("consonant");
  }
}

checkVowel("a"); // vowel
checkVowel("b"); // consonant
checkVowel("E"); // vowel
