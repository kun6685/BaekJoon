// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

let newArr = [];

for(let i = 0; i < input.length; i++){
    newArr.push(+input[i]);
}

let A = newArr[0];

let sum = 0;

for(let i = 1; i <= A; i++){
    sum = sum + i;
}

console.log(sum);
