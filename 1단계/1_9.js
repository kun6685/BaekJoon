// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);

/*const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(A/B);
console.log(A%B);
*/