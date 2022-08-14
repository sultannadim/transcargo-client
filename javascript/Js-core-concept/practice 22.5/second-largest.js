function secondLargest(num) {
  let largest = 0;
  let secLarge = 0;
  let thirdLarge = 0;

  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element > largest) {
      thirdLarge = secLarge;
      secLarge = largest;
      largest = element;
    } else if (element > secLarge && element !== largest) {
      secLarge = element;
    } else if (element > thirdLarge && element !== secLarge) {
      thirdLarge = element;
    }
  }
  return thirdLarge;
}

const result = secondLargest([100, 500, 200, 300, 600, 700, 500, 1000]);
console.log(result);
