// - **Day 26:** Reverse a string

function reverseStr(str) {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers = +str[i];
  }
  return revers;
}

reverseStr("mohdaffankhan");
