/**
 * 34) একটা ফাংশন লিখবা যেটাকে তুমি ক োন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার
square করে সে ই square কে রিটার্ন করবে ।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে ।
 */

function square(num) {
  const mySquare = num * num;
  return mySquare;
}
const result = square(11);
console.log(result);
