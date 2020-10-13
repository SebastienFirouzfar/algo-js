let arr = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function average(arr) {
    let totalDivision = 0;
    for (let indice = 0; indice < arr.length + 1; indice++) {
        totalDivision = arr.reduce(reducer)/2; 
    }
    return totalDivision;
}

function min(arr) {
    let minimum = 0;
    for (let indice = 0; indice < arr.length; indice++) {
        if (arr[indice] < arr[indice + 1]) {
            minimum = arr[indice];
            return minimum;
        }
    }
}

function max(arr) {
    return Math.max(...arr);
    // OU 

    /**
     *  for (let indice = 0; indice < arr.length-1; indice++) {
        if (arr[indice] > arr[indice + 1]) {
            arr[indice] = arr[indice+1];
            return arr; 
        }
    }
     */

}


console.log(average(arr));
console.log(min(arr));
console.log(max(arr)); 
