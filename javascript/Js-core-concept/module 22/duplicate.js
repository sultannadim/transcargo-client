const names = ["abul", "babul", "cabul", "dabul", "babul", "tabul", "abul"];
function removerDuplicate(name) {
  let unique = [];
  for (let i = 0; i < names.length; i++) {
    let element = names[i];
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}
const result = removerDuplicate(names);
console.log(result);
