/**
 * 29) Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
 */

function odd_even(num) {
  if (num % 2 === 0) {
    return `${num} is a even number`;
  } else {
    return `${num} is a odd number`;
  }
}

const result = odd_even(3);
console.log(result);
