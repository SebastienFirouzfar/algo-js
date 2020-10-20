let arraySort = [4, 8, 2, 7, 5, 1, 3, 10, 9, 6];
var temp;
function trie(arraySort) {
    for (var indice = 0; indice < arraySort.length - 1; indice++) {
        if (arraySort[indice] < arraySort[indice + 1]) {
            temp = arraySort[indice];
            arraySort[indice] = arraySort[indice + 1];
            arraySort[indice + 1] = temp;
        }
        console.log(temp);
    }
}

console.log(trie(arraySort));