function showCelsius(farhenheit) {
  let celsius = ((farhenheit - 32) * 5) / 9;
  return celsius;
}
const allCelsius = showCelsius(122);
console.log(allCelsius);
