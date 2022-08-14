//  to the power... prothom perametrer ta holo sonkha r second ta holo power
const result = Math.pow(3, 3);
console.log(result);

// math abs holo duita sonkhar difference - + ja e thakuk take + kore fela

let num1 = 15;
let num2 = 35;
let gap = Math.abs(num1 - num2);

if (gap < 5) {
  console.log("we can be friend");
} else {
  console.log("we can not be friend");
}

// kono bongnangso sonkha ke purno sonkha te rupantor korte hole round use korte hoy

let myFloat = 2.45;
let floatRound = Math.round(myFloat);
console.log(floatRound);

// float number k uper number a round koarar jonno ceil use kote hoy

let upperRound = Math.ceil(myFloat);
console.log(upperRound);

// float number k below number a round koarar jonno floor use kote hoy

let belowRound = Math.floor(myFloat);
console.log(belowRound);

// kono random sonkha paoar jaonn random use korte hoy

console.log(Math.random());

// koto the koto sonkhar modde random number pere chai tar jonno

let myRandom = Math.random() * 100;
let myRandomRounded = Math.round(myRandom);
console.log(myRandomRounded);

//  for loop diye random sokka khela

for (let i = 0; i < 20; i++) {
  let diseRandon = Math.round(Math.random() * 6);
  console.log(diseRandon);
}
