const shoppingCart = [
  { name: "shirt", price: 1200 },
  { name: "pant", price: 2000 },
  { name: "shoes", price: 2500 },
];

function shoppingTotal(product) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    let element = product[i];
    total += element.price;
  }
  return total;
}

const result = shoppingTotal(shoppingCart);
console.log(result);
