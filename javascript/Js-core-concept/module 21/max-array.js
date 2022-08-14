function maxInArray(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const height = [10, 250, 140, 356, 111];
const result = maxInArray(height);
console.log(result);
