/* 
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
*/

const fs = require('fs');
const [N, ...asd] = fs.readFileSync("input.txt").toString().trim().split(/\s/);


let newArr = [];
for(let i=0; i<=[N, ...asd].length; ++i){
    newArr.push(+[N, ...asd][i]);
}

const A = newArr[0];

for(let i=1; i<newArr.length-1; i+=2){
    console.log(`${newArr[i]+newArr[i+1]}`);
}

