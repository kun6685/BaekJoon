/* 
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
**/

const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split(/\s/);

for(let i = 0; i < input.length - 1; i+=2){
  if(parseInt(input[i]) + parseInt(input[i + 1]) === 0) {
    continue;
  }
  console.log(parseInt(input[i]) + parseInt(input[i + 1]));
}

