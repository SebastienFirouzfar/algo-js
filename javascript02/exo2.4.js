let i = 1;
let indiceWhile = 1;
let responsePair = 0;
let multiplicationImpair = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        responsePair = i / 2;
        console.log(responsePair + " nombre pair");
    }
    i++;
}
console.log(); 

while (indiceWhile <= 100) {
    if (indiceWhile % 2 == 1) {
        multiplicationImpair = indiceWhile * 3;
        console.log(multiplicationImpair + " nombre Impair");
    }
    indiceWhile++;
}
