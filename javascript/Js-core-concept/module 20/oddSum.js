function oddSum(numbers) {
  let allOdd = [];
  let allOddSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];

    const remainder = element % 2;
    if (remainder !== 0) {
      allOdd.push(element);
      allOddSum += element;
    }
  }
  return allOddSum;
}

const allNumber = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const allOddResult = oddSum(allNumber);
console.log(allOddResult);
