1. Question List

// 1. Print Numbers from 1 to N

for (let i = 1; i <= 100; i++) {
console.log(i);
}

// 2. Print Numbers from N to 1 without changing the loop condition of above question

for (let i = 10; i >= 1; i--) {
console.log(i);
}

// 3. Print All Even Numbers from 1 to N

for (let i = 1; i <= 100; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

// 4. Sum of First N Natural Numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
sum += i;
}
console.log(sum);

// 5. **Product (Factorial) of N**

let fact = 1;
for (let i = 1; i <= 5; i++) {
fact \*= i;
}

// 6. **Sum of All Even Numbers up to N**

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
if (i % 2 === 0) {
sum += i;
}
}

// 7. **Print Squares of Numbers from 1 to N**

let squre = 10;

for (let i = 1; i <= 10; i++) {
console.log(i \*\* 2);
}

**Print all numbers divisible by 3 and 5 up to N**

let N = 30;

for (let i = 1; i <= N; i++) {
if (i % 3 === 0 && i % 5 === 0) {
console.log(i);
}
}

**Find the sum of all odd numbers up to N**

// **Find the sum of all odd numbers up to N**

let n = 10;
let odd = 0;
for (let i = 1; i <= n; i++) {
if (i % 2 !== 0) {
odd += i;
}
}

console.log(odd);
