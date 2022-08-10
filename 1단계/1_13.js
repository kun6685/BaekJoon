// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구ut하는 프로그램을 작성하시오.
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];
const C = newArr[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);         
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C) 

/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];
const C = newArr[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);         
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C) 
*/