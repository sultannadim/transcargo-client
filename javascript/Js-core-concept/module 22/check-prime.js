function isPrime(n) {
  if (n < 2) {
    return `${n} is not a prime number`;
  }
  if (n === 2) {
    return `${n} is a prime number`;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}

const result = isPrime(17);
console.log(result);
