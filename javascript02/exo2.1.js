const readlineSync = require("readline-sync");
let age = new Number(readlineSync.question('Give me a number'));
if(age < 18){
    console.log("Tu es mineur"); 
}else{
    console.log("Tu es majeur "); 
}