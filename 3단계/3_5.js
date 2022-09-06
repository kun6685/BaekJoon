/* 

빠른 A + B
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

*/

const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split(/\s/);

let newArr = [];

for(let i = 0; i < input.length; i++){
    newArr.push(+input[i]);
}

let answer = '';

for(let i = 1; i < newArr.length-1; i+=2){
    answer += newArr[i] + newArr[i+1] + '\n';
}

console.log(answer);
