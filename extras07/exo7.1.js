const readlineSync = require("readline-sync");
let number; 
let nombreDeviner = Math.floor(Math.random() * 101);
let nombreTrouver = false;
while (number != nombreDeviner) {
    number = readlineSync.question('Donnez moi un nombre de 1 à 100 ');
    if (number < nombreDeviner) {
        console.log("too low ");
    }
    if (number > nombreDeviner) {
        console.log("trop élevée ");
    }

    if (number == nombreDeviner) {
        console.log("Felicitation ");
        nombreTrouver = true;
    }
}