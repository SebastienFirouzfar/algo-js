const readlineSync = require("readline-sync");
let shoesSize = new Number(readlineSync.question('Give me your shoes size'));
let birthYear = new Number(readlineSync.question('Gime me your birth Year'));

/**shoes size**/
let resultatShoesSize = shoesSize * 2 + 5 *50 - birthYear + 1766
console.log("Shoes size "+resultatShoesSize);


/*birth year*/
let resultatBirthYear = birthYear * 2 + 5 *50 - birthYear + 1766
console.log("Birth year "+resultatBirthYear);
