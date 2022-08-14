/**
 * ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
 */

let number = [10, 20, 30, 80, 90, 50, 40, 100, 25, 200];
for (let i = 0; i < number.length; i++) {
  let element = number[i];
  if (element > 80) {
    console.log(element);
  }
}
