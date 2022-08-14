// split holo kono ekta sentense ba word ke kiser bittire alaada korbo seta..
let gan =
  "tumi bondhu kala pakhi. ami jeno ki. bosonto kale tomay bolte parini";
let splitBySpace = gan.split(" ");
console.log(splitBySpace);
let splitByAlphabet = gan.split("");
console.log(splitByAlphabet);
let splitBySentense = gan.split(".");
console.log(splitBySentense);

// slice hole ekta string er kono ekta word ke kete neya.. jeta string er kon index theke kon index porjonto kata hobe ta bole deya jay

let sliceSecondWord = gan.slice(5, 12);
console.log(sliceSecondWord);

// subsstring holo slice er kaca kaci ekta jinis
let subStringWord = gan.substring(5, 12);
console.log(subStringWord);

// join hono kono word ba sentense ba kono kicu ke ki diye join korbo seta
let multiLine = [
  "tumi bondhu kala pakhi",
  " ami jeno ki",
  " bosonto kale tomay bolte parini",
];
let joinLine = multiLine.join("--");
console.log(joinLine);
