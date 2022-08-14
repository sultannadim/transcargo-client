// best method

function average(number) {
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    var currentNumber = number[i];
    total += currentNumber;
  }
  var myAverage = total / number.length;
  return console.log(myAverage);
}
average([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
