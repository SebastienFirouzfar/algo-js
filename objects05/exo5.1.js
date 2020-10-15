const readlineSync = require("readline-sync");
let nameSerie = readlineSync.question('Donnez moi le nom de votre serie ');
let producYear = readlineSync.question('Donnez moi l annee de votre serie ');
let numberNameCasting = new Number(readlineSync.question('combien d acteur a-t-il dans la serie '));
var nameCasting = []; 
function askTvSerie() {
    for (let index = 0; index < numberNameCasting ; index++) {
        let memberCasting = readlineSync.question('Qui sont les acteurs ');
        nameCasting[index] = memberCasting;    
    }

    let infomation = {
        nameSerie : nameSerie,
        producYear : producYear,
        nameCasting : nameCasting,
    }; 
    return infomation; 
}

console.log(askTvSerie()); 