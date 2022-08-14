function inchesTofeet(inches) {
  const feet = inches / 12;
  return feet;
}

const inputInches = 120;
const result = inchesTofeet(inputInches);

if (typeof inputInches !== "number") {
  console.log("Please input a number");
} else {
  console.log(result);
}
