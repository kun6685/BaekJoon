// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오.
// 진행중

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('/n').map((el) => parseInt(el));
  })
  .on('close', function () {
    

    if((-1000<=input[0] && input[0] <= 1000 && input[0]!=0) && (-1000<=input[1] && input[1] <= 1000 && input[1]!=0)){

        switch(true){
            case input[0] > 0 && input[1] > 0: 
                console.log(1);
            break;
            
            case input[0] < 0 && input[1] > 0:
                console.log(2);
            break;
        
            case input[0] < 0 && input[1] < 0:
                console.log(3);
            break;
        
            case input[0] > 0 && input[1] < 0:
                console.log(4);
            break;
        }
        }
    process.exit();
  });