const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentense) {
  let count = 0;
  let letters = Array.from(sentense);
  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

const result = countVowels("I Love Bangladesh");
console.log(result);
