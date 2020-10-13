const readlineSync = require("readline-sync");

let user = new Number(readlineSync.question('Donnez moi un nombre '));

function rand10(){
    return Math.floor( Math.random()* 11); 
}

/**
 * Return a multiplication tab
 * @param {*} nombre 
 */
function multiRand(n){
    let array = []; 
    for(let indice = 0; indice<n; indice++){
         let random = rand10(); 
         array[indice] = random; 
    } 
    return array; 
}
console.log(multiRand(user)); 
