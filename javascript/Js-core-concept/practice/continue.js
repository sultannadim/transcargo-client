var bookPrice = [50, 60, 150, 200, 250, 180, 190, 350, 400, 175];

for (var i = 0; i < bookPrice.length; i++) {
  var singlePrice = bookPrice[i];
  if (singlePrice > 200) {
    continue;
  }
  console.log(singlePrice);
}
