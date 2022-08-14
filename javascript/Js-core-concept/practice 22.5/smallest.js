function smallest(num) {
  let smallNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element < smallNumber) {
      smallNumber = element;
    }
  }
  return smallNumber;
}

const result = smallest([100, 20, 30, 40, 50, 60, 70, 80]);
console.log(result);
