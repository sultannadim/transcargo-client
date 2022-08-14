function simpleInterest(principle, rate, time) {
  const interest = (principle * rate * time) / 100;
  return interest;
}
let principle = 100000;
let rate = 5;
let time = 3;
const showInterest = simpleInterest(principle, rate, time);
console.log("Simple Interest Is :", showInterest, " Taka.");
