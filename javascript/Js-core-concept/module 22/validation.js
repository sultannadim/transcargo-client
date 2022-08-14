function validation(num1, num2) {
  if (num1 !== "number" || num2 !== "number") {
    return "please input a number";
  }
  return num1 + num2;
}

const result = validation("50", 50);

console.log(result);

