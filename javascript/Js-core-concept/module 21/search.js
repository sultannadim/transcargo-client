// 1. includes method

const gan = "Tumi Bondhu Kala Pakhi Ami Jeno Ki";

let ganLowerCase = gan.toLowerCase();
let searchString = "pakhi";
let searchStringLowerCase = searchString.toLowerCase();
let doesExists = ganLowerCase.includes(searchStringLowerCase);
console.log(doesExists);

// 2. indexof method

if (gan.indexOf("Tumi") !== -1) {
  console.log("string is inside");
} else {
  ("string can not find");
}
// 3. startwith method
console.log(gan.startsWith("Bondhu"));

// 4. endwith method

const fileName = "file.mp4";
console.log(fileName.endsWith(".mp4"));
