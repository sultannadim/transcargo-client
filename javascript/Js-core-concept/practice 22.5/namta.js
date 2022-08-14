/**
 * 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে
দে খাবে ।
 */

function namta(num) {
  for (let i = 1; i <= 10; i++) {
    let multi = num * i;
    console.log(`${num} x ${i} = `, multi);
  }
}

namta(13);
