// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A-B);

/*const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

console.log(A-B);*/