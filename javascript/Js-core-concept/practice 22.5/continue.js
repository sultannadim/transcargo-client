/**
 * 25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।
 */

const bookPrice = [150, 200, 180, 300, 120, 400, 500, 80];

let newList = [];
for (let i = 0; i < bookPrice.length; i++) {
  let element = bookPrice[i];
  if (element > 200) {
    continue;
  }
  newList.push(element);
}

console.log(newList);
