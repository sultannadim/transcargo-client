function avgArray(number) {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    total += element;
  }
  let totalAvg = total / number.length;
  return totalAvg;
}

let allNumber = [10, 20, 30, 40, 100, 200];
let result = Math.round(avgArray(allNumber));
console.log(result);
