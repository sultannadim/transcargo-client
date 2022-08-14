function arraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum += element;
  }
  return sum;
}

const arrayNumber = [11, 12, 15, 17, 20, 25, 33, 100];
const total = arraySum(arrayNumber);
console.log(total);
