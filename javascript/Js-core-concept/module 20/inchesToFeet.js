function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const dadaInches = 80;
const dadaFeet = inchesToFeet(dadaInches);
console.log("Dadar ucchota holo", dadaFeet, "Feet");

const nanaInches = 75;
const nanaFeet = inchesToFeet(nanaInches);
console.log("Nanar ucchota holo", nanaFeet, "Feet");
