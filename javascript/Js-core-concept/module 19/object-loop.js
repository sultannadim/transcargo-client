var shopingCart = {
  mobile: 10,
  laptop: 5,
  book: 8,
  pen: 15,
};
var cartProperty = Object.keys(shopingCart);
var cartValue = Object.values(shopingCart);

// loopin for loop method.. jamela wala

for (var i = 0; i < cartProperty.length; i++) {
  var property = cartProperty[i];

  var value = cartValue[i];
  console.log(property, value);
}

// loopin for in loop method

for (var allProparty in shopingCart) {
  allValue = shopingCart[allProparty];
  console.log(allProparty, allValue);
}
