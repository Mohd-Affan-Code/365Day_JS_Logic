//- **Day 2:** Remove duplicates without using `Set`

// function removeDuplicates(arr) {
//   let result = [];

//   for (let i = 0; i < arr.lenght; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
