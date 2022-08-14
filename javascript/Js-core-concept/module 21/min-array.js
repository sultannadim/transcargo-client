function minArray(number) {
  let minNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < minNumber) {
      minNumber = element;
    }
  }
  return minNumber;
}
let allNumber = [25, 20, 50, 1, 90];
const result = minArray(allNumber);
console.log(result);
