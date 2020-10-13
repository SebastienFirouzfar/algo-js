/**readlineSync**/
const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);

/**question**/ 
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");

/**display**/
console.log("Sa marche OUAIIIIIIIIIIIIII"); 

console.log("10" + 5);
console.log(10 + 5);