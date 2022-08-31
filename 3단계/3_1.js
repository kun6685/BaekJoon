// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

var fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split('/n');

var newArr = [ ];

for(let i = 0; i < input.length; i++){
    newArr.push(+input[i]);
}

let A = input[0];

for(let i = 1; i < 10; i++){
    console.log(`${A} * ${i} = ${A * i}`);
}
