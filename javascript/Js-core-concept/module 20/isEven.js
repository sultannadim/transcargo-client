function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumberIsEven = isEven(25);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(50);
console.log(herNumberIsEven);
