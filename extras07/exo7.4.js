const readlineSync = require("readline-sync");
let pizzaTab = [];
let pizzaSave = [];
let askArome;
let removeArome;
let addArome;
let finish = " "; 


console.log('Hello! Welcome to the Pizza Flavors Manager.');
console.log('Please choose your actions');
console.log();
console.log('1 - List all the pizza flavors');
console.log('2 - Add a new pizza flavor');
console.log('3 - Remove a pizza flavor')
console.log('4 - Exit this program')
let number = parseInt(readlineSync.question("Entrer un numéro  : "));
while(number !== 4){
    switch(number) {
        case 1:
            console.log("Pas de liste de pizza pour le moment");
            break;
    
        case 2:
            askArome = readlineSync.question('Combien d arome voulez-vous en ajouter');
            for (let indice = 0; indice < askArome; indice++) {
                addArome = readlineSync.question('Quel arome voulez-vous ajouter ?');
                pizzaTab.push(addArome);
                console.log(pizzaTab);
            }
            finish = readlineSync.question('Avez-vous finis ? '); 
            if(finish == "oui"){
                pizzaSave = pizzaTab; // sauvegarde la pizza pour la case 3 si le client souhaite effacé un arôme 
            }
            break;
    
        case 3:
            for (let i = 0; i < pizzaSave.length; i++) {
                console.log(pizzaSave + i);
                removeArome = new Number(readlineSync.question("Enter your action s number "));
                pizzaTab.pop(pizzaSave[removeArome]);
                console.log("Vous avez enlevé l arome numero " + removeArome);
                console.log(pizzaSave);
            }
            break;
    
        case 4:
            console.log("Au revoir");
            break;
        default: console.log("Pizza vide");
    }
}


console.log("le client souhaite une pizza avec " + pizzaSave);


