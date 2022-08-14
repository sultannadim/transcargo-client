// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 eita holo ager du ta sonkhar jog fol.. jemon 3 = 2 + 1... 5 = 3+2
let fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo);
