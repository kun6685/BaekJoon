// 체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.
// 동혁이가 발견한 흰색 피스의 개수가 주어졌을 때, 몇 개를 더하거나 빼야 올바른 세트가 되는지 구하는 프로그램을 작성하시오.
// 주어진 피스 갯수 : 0 1 2 2 2 7

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const king = newArr[0];
const queen = newArr[1];
const rook = newArr[2];
const bishop = newArr[3];
const knight = newArr[4];
const pawn = newArr[5];

console.log(1-king);
console.log(1-queen);
console.log(2-rook);
console.log(2-bishop);
console.log(2-knight);
console.log(8-pawn);

/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const king = newArr[0];
const queen = newArr[1];
const rook = newArr[2];
const bishop = newArr[3];
const knight = newArr[4];
const pawn = newArr[5];

console.log(1-king);
console.log(1-queen);
console.log(2-rook);
console.log(2-bishop);
console.log(2-knight);
console.log(8-pawn);
*/