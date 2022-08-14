/**
 * 49) Write a function and take an array as a parameter. Find the average of all
the elements of that array and return this average.
 */

function average(num) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    total += element;
    count++;
  }
  let avg = total / count;
  return avg;
}

const result = average([10, 10, 10, 50, 100]);

console.log(result);
