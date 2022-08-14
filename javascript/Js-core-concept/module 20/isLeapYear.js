function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  // else shortcut
  return false;
}
const myLeapYear = isLeapYear(2026);
console.log("My year is :", myLeapYear);
const herLeapYear = isLeapYear(2020);
console.log("Her year is :", herLeapYear);
