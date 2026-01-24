//- **Day 18:** Check whether a number is prime

function checkPrime(num) {
  if (num <= 1) {
    console.log("Not Prime");
    return;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log("Not Prime");
      return;
    }
  }

  console.log("Prime");
}

checkPrime(7); // Prime
checkPrime(10); // Not Prime
checkPrime(2); // Prime
checkPrime(1); // Not Prime
