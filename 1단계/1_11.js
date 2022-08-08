// 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오.

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin',{encoding : 'utf-8'}).trim();

console.log(input - 543);

/*
const fs = require('fs');
let input = fs.readFileSync('input.txt',{encoding : 'utf-8'}).trim();

console.log(input - 543);
*/