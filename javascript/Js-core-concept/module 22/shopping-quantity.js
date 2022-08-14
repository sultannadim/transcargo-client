const shoppingCart = [
  { name: "shirt", price: 1200, quantity: 5 },
  { name: "pant", price: 2000, quantity: 3 },
  { name: "shoes", price: 2500, quantity: 1 },
];

function shoppingTotal(product) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    let element = product[i];
    const singleTotal = element.price * element.quantity;
    total += singleTotal;
  }
  return total;
}

const result = shoppingTotal(shoppingCart);
console.log(result);
