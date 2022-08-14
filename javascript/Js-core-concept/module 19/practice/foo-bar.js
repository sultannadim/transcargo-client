function foo() {
  var foo = "foo";
  return console.log(foo);
}
foo();

function bar() {
  var bar = "bar";
  return console.log(bar);
}
bar();

function foo() {
  return bar();
}
foo();
