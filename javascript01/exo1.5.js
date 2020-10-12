const readlineSync = require("readline-sync");
let number1 = new Number(readlineSync.question('Give me a number'));
let number2 = new Number(readlineSync.question('Gime me the the 2nd number'));
console.log("On a conserve le " +Math.trunc(number1, number2))
let resultat = number1 * number2;
console.log(resultat) 