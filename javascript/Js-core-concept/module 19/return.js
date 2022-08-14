function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}
var taka = 250;
var totalSingara = bringSingara(taka);
console.log(totalSingara);
