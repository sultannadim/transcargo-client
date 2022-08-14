function wordReverse(text) {
  let word = text.split(" ");
  let reverseword = [];
  for (let i = word.length - 1; i >= 0; i--) {
    let element = word[i];
    reverseword.push(element);
  }
  let reversed = reverseword.join(" ");
  return reversed;
}
let myText = "I AM A GOOD BOY";
let result = wordReverse(myText);
console.log(result);
