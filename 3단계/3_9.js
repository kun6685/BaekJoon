/* 
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
**/

const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split(' ');

let blank = "";
let blank_add = " ";
let star = "";
let star_add = "*";
let blank_decrease = input[0];

for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j < blank_decrease - 1; j++) {
    blank += blank_add;
  }
  star += star_add;
  console.log(blank + star);
  blank = "";
  blank_decrease -= 1;
}



