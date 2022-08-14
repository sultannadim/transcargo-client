/**
 *  show number 1 to 50
 * if the number is divisible by 3 show "foo"
 * if the number is divisible by 5 show "bar"
 * if the number is divisible by 3 and 5 show "foobar"
 * **/
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
