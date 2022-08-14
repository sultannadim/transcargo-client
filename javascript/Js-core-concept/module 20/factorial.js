function factorial(number) {
  let multification = 1;
  for (let i = 1; i <= number; i++) {
    multification *= i;
  }
  return multification;
}
var factorialResult = factorial(9);
console.log(factorialResult);
