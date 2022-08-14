var shopingCart = {
  mobile: 10,
  laptop: 5,
  book: 8,
  pen: 15,
};
console.log(shopingCart);
// get proparty value
console.log(shopingCart.mobile);
// alternative way to get proparty value
console.log(shopingCart["pen"]);

// get all proparty name

var propartyName = Object.keys(shopingCart);
console.log(propartyName);

// get all property value
var propartyValue = Object.values(shopingCart);
console.log(propartyValue);

// set proparty value==============
// first method
shopingCart.laptop = 50;
console.log(shopingCart);
// second method
var bookValue = ["book"];
shopingCart[bookValue] = 100;
console.log(shopingCart);
// third method
shopingCart["pen"] = 150;
console.log(shopingCart);
