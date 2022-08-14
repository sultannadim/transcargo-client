function serial(number) {
  bySerial = [];
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    bySerial.push(element);
  }
  bySerial.sort(function (a, b) {
    return a - b;
  });
  return bySerial;
}

const allNumber = [10, 13, 5, 8, 1, 3, 80, 75, 100, 15];
const showSerial = serial(allNumber);
console.log(showSerial);
