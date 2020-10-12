const readlineSync = require("readline-sync");
let questions = readlineSync.question('Pq avez-vous choisir de faire votre formation chez BeCode ?');
let compterStory = 5;
let stockreponse = questions
compterStory--; 
console.log(stockreponse+ " Il vous reste "+compterStory); 

let questions2 = readlineSync.question('Êtes-vous en couple actuellement ?');
let stockreponse2 = questions2;
compterStory--; 
console.log(stockreponse2+ " Il vous reste "+compterStory); 

let questions3 = readlineSync.question('regardes-tu le foot us ?');
let stockreponse3 = questions3;
compterStory--; 
console.log(stockreponse3+ " Il vous reste "+compterStory);

let questions4 = readlineSync.question('penses-tu que Trump est un bon président  ?');
let stockreponse4 = questions4;
compterStory--; 
console.log(stockreponse4+ " Il vous reste "+compterStory);


let questions5 = readlineSync.question('Sais-tu que la Belgique ont perdu hier face au Anglais de 2-1 ?');
let stockreponse5 = questions5;
compterStory--; 
console.log(stockreponse5+ " Il vous reste "+compterStory);

