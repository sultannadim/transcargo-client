/**
 * 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result.
 */

function findLeapYear(year) {
  let leapYear = [];
  for (let i = 0; i < year.length; i++) {
    let element = year[i];
    if (element % 4 === 0 || (element % 400 === 0 && element % 100 !== 0)) {
      leapYear.push(element);
    }
  }
  return leapYear;
}

const result = findLeapYear([2023, 2024, 2025, 2028, 2030]);
console.log(result);
