const readlineSync = require("readline-sync");
var pizzaTab = [];
//let pizzaSave = [];
let askArome;
let removeArome;
let addArome;
let indice = 0;
let number ;


while (number != 4) {
    console.log('Hello! Welcome to the Pizza Flavors Manager.');
    console.log('Please choose your actions');
    console.log();
    console.log('1 - List all the pizza flavors');
    console.log('2 - Add a new pizza flavor');
    console.log('3 - Remove a pizza flavor')
    console.log('4 - Exit this program')
    number = parseInt(readlineSync.question("Entrer un numéro  : "));
    console.log();

    switch (number) {
        case 1:
            console.log("Pas de liste de pizza pour le moment");
            break;

        case 2:
            askArome = parseInt(readlineSync.question('Combien d arome voulez-vous en ajouter '));
            for (indice; indice < askArome; indice++) {
                addArome = readlineSync.question('Quel arome voulez-vous ajouter ? ');
                pizzaTab.push(addArome);
                //pizzaSave = pizzaTab; sauvegarde la pizza pour la case 3 si le client souhaite effacé un arôme   
            }
            console.log(pizzaTab);
            console.log();
            break;

        case 3:
            for (let i = 0; i < pizzaTab.length; i++) {
                console.log(pizzaTab);
                removeArome = parseInt(readlineSync.question("Enter your action s number "));
                //pizzaTab.pop(pizzaTab[removeArome]);
                pizzaTab.splice(removeArome - 1, 1); //compter à partir de 1 jusqu'à n POUR EFFACER UN AROME
                console.log("Vous avez enlevé l arome numero " + removeArome);
                console.log(pizzaTab);
                break; 
            }
            break;

        case 4:
            console.log("le client souhaite une pizza avec " + pizzaTab);
            process.exit();
            break;
        default: console.log("Pizza vide ");
    }
}



