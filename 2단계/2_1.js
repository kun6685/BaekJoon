// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오. 

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

if(A>B){
    console.log('>');
} else if(B>A){
    console.log('<');
} else {
    console.log('==');
}

/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];
const B = newArr[1];

if(A>B){
    console.log('>');
} else if(B>A){
    console.log('<');
} else {
    console.log('==');
}
*/

