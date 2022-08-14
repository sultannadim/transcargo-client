const products = [
  { id: 1, name: "Samsung Phone", price: 10000 },
  { id: 2, name: "Samsung laptop", price: 11000 },
  { id: 3, name: "oppo phone", price: 12000 },
  { id: 4, name: "macbook", price: 110000 },
  { id: 5, name: "lenevo Laptop", price: 15000 },
  { id: 6, name: "vivo Phone", price: 16000 },
  { id: 7, name: "realme phone", price: 13000 },
];

function matchedProduct(allProducts, search) {
  const allMatched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      allMatched.push(product);
    }
  }
  return allMatched;
}

const result = matchedProduct(products, "samsung");
console.log(result);
