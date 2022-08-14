function sum(num1, num2) {
  console.log(num1, num2);
  //   arguments is array like object
  console.log(arguments);
  console.log(arguments[2]);
}

sum(10, 20, 30, 40, 50);
