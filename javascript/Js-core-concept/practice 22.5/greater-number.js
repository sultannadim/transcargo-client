/**
 * 8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else
 */

const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is a greater number.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is a greater number.`);
} else {
  console.log(`${num3} is a greater number.`);
}
