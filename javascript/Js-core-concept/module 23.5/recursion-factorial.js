function factorial(i) {
  if (i == 5) {
    return 5;
  }
  return i * factorial(i + 1);
}

const result = factorial(1);
console.log(result);
