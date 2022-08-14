function secondLargest(number) {
  let largest = 0;
  let secLarge = 0;

  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (element > largest) {
      secLarge = largest;
      largest = element;
    } else if (element > secLarge && element !== largest) {
      secLarge = element;
    }
  }

  return secLarge;
}

let arr = [10, 20, 50, 30, 80, 100, 20, 200, 400];
const result = secondLargest(arr);
console.log(result);
