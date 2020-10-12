const readlineSync = require("readline-sync");
let min = new Number(readlineSync.question('Give me a min number'));
let max = new Number(readlineSync.question('Give me a min number'));
let i = 1;
    while(i<10){
        let current = new Number(readlineSync.question('Give me a current number'));
        if(current > min && current < max ){
            console.log("It's between"); 
        }else{
            console.log("he isn't between"); 
            break; 
        }
        i++; 
    }