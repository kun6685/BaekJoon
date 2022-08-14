// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오. 

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];

switch(true){
    case 90<=A && A<=100:
        console.log('A');
    break;
    
    case 80<=A:
        console.log('B');
    break;
    
    case 70<=A:
        console.log('C');
    break;
    
    case 60<=A:
        console.log('D');
    break;
    
    default:
        console.log('F');
}

/*
const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

let newArr = [];
for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
}

const A = newArr[0];

switch(true){
    case 90<=A && A<=100:
        console.log('A');
    break;
    
    case 80<=A:
        console.log('B');
    break;
    
    case 70<=A:
        console.log('C');
    break;
    
    case 60<=A:
        console.log('D');
    break;
    
    default:
        console.log('F');
}
*/

