// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

// 472
// 385

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr = [];
for(let i=0; i<input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A * (B%10));
console.log(A * Math.floor(((B%100)/10)));
console.log(A * Math.floor((B/100)));
console.log(A * B);


/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let newArr = [];
for(let i=0; i<input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A * (B%10));
console.log(A * Math.floor(((B%100)/10)));
console.log(A * Math.floor((B/100)));
console.log(A * B);
*/