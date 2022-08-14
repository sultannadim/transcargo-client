// swape holo ekta variable er man er sathe r ekta variable er man k tranfer kora.. r er jonno temp and destructring method use kora jay

// method 1 temp

let first = 5;
let second = 7;
let temp = first;
first = second;
second = temp;
console.log(first, second);

// method 2 destrecturing

[first, second] = [second, first];

console.log(first, second);
