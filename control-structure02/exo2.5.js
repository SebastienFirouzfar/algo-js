const readlineSync = require("readline-sync");
let favoriteNumber = new Number(readlineSync.question('give me an favorite number'));
while (favoriteNumber != 50) {
    console.log("Êtes-vous sure ?");
    favoriteNumber = new Number(readlineSync.question('give me an favorite number'));
    if (favoriteNumber == 50) {
        console.log("stop"); 
        break;
    }
}

