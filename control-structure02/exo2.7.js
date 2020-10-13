const readlineSync = require("readline-sync");
let numberChoose= new Number(readlineSync.question('donnez moi le nombre que vous voulez mettre'));
console.log(); 
let somme = 0; 
let resultat = 0; 
for(let indice = 1; indice <= numberChoose; indice++){
    let number1 = new Number(readlineSync.question('donnez moi le nombre que vous voulez mettre'));
    somme = somme + number1; 
    console.log(somme); 
}
