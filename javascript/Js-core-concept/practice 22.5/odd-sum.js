/**
 * 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers.

 */

function findOddSum(number) {
  let oddSum = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (element % 2 !== 0) {
      oddSum += element;
    }
  }
  return oddSum;
}

const result = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(result);
