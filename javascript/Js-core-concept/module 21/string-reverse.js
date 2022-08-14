function stringReverse(text) {
  let joinString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let element = text[i];
    joinString += element;
    console.log(element, joinString);
  }
  return joinString;
}

stringReverse("i am a good boy");
