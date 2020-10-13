const readlineSync = require("readline-sync");
let largeur = new Number(readlineSync.question('Donnez moi la largeur du rectagle '));
let longueur = new Number(readlineSync.question('Donnez moi la longueur du rectagle'));


/**
 * Calcul de la surface
 * @param {*} largeur 
 * @param {*} longueur 
 */
function calcSurface(largeur, longueur){
    return largeur * longueur; 
}

console.log(calcSurface(largeur, longueur)); 