/**
 * 32) একটা ফাংশন লিখবা যেটা যে ক োন নামকে uppercase বা রে গুলার কেইস হিসেবে নিবে আর
আউটপুট হিসেবে সেই নাম lowercase করে রি টার্ন করবে ।

 */

function lowercase(names) {
  let allLower = names.toLowerCase();
  return allLower;
}

const result = lowercase("SULTAN");
console.log(result);
