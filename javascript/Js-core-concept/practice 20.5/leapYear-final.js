function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Is leaf a year.";
  } else {
    return "Is not a leaf year.";
  }
}

const yearCheck = 1904;
const leapYear = isLeapYear(yearCheck);
console.log(yearCheck, leapYear);
