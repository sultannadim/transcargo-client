function isPrime(n) {
  const allPrime = [];
  for (let i = 2; i <= n; i++) {
    let prime = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        prime = 0;
        break;
      }
    }
    if (prime === 1) {
      allPrime.push(i);
    }
  }
  return allPrime;
}

const result = isPrime(100);
console.log(result);
