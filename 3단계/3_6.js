/* 
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
**/

const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split(/\s/);

let answer = '';

let k = 1

for(let i = 1; i < input.length; i+=2){
    answer +=  `Case #${k++}: ${parseInt(input[i]) + parseInt(input[i+1])} \n`;
}

console.log(answer);




