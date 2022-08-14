const phones = [
  { name: "samsung", camera: 17, ram: "5gb", price: 25000 },
  { name: "oppo", camera: 10, ram: "5gb", price: 15000 },
  { name: "vivo", camera: 18, ram: "5gb", price: 1000 },
  { name: "mi", camera: 15, ram: "5gb", price: 3000 },
  { name: "huawei", camera: 20, ram: "5gb", price: 5000 },
];

function lowestPrice(allPhone) {
  let cheapestPrice = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let element = phones[i];
    if (element.price < cheapestPrice.price) {
      cheapestPrice = element;
    }
  }
  return cheapestPrice;
}

const result = lowestPrice(phones);
console.log(result);
