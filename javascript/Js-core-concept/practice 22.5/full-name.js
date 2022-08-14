/**
 * 33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
নামের শেষের অংশ প্যারামিটার হিসেবে নিবে । আর ত োমার নামের দইু অংশ জ োড়া দিয়ে আউটপুট
হিসেবে ত োমার পূর্ন নাম রিটার্ন করে দিবে । যেমন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে ।
 */

function fullName(firstName, lastName) {
  const myName = firstName + " " + lastName;
  return myName;
}

const result = fullName("Sultan", "Nadim");
console.log(result);
