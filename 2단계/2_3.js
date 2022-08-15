// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];

switch(true){
    case (A%4 == 0 && A % 100 != 0) || A%400 == 0: 
        console.log(1);
    break;
    default:
        console.log(0);
}

/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];

switch(true){
    case (A%4 == 0 && A % 100 != 0) || A%400 == 0: 
        console.log(1);
    break;
    default:
        console.log(0);
}
*/

