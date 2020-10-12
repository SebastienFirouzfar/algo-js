const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Can you give me your name please?');
let lastName = readlineSync.question('Can you give me your last name please?');
let city = readlineSync.question('Can you give me your city please?');

console.log("Your name is "+firstName+" "+lastName+ " and you live in "+city); 