/**
 * 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
 */

function isosceles(num1, num2, num3) {
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "This traiangle is Isosceles.";
  } else {
    return "This traiangle is not Isosceles.";
  }
}

const result = isosceles(9, 8, 9);
console.log(result);
