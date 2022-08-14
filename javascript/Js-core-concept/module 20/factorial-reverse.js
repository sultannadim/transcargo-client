function factorialReverse(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}
const reverseValue = factorialReverse(6);
console.log(reverseValue);
