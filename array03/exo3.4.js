let array = [10, 2, 35, 48, 55];
let minimum = 0;
for (let indice = 0; indice < array.length; indice++) {
    if (array[indice] < array[indice + 1]) {
        minimum = array[indice];
        console.log("Le minimum est " + minimum); 
        return;
    }
}