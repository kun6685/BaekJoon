/* 
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
**/

const fs = require('fs');

let [n1, ... na] = fs.readFileSync('input.txt').toString().trim().split(/\s/);

let result = '';

let newArr = [];

for(let i = 0; i <= [n1, ... na].length; i++){
    newArr.push(+[n1, ... na][i]);
}

const N = newArr[0];

const X = newArr[1];

for(let i = 2; i < newArr.length; i++){
  if(newArr[i] < newArr[1]) {
    result += newArr[i] + ' ';    
  }
}

console.log(result);


