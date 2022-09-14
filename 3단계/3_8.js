/* 
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
**/

const fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

let result = '';

for(let i = 0; i < input[0]; i++){
    for(let j = 1; j <= 1; j++){
        result += '*';
    }
    console.log(result);
}



