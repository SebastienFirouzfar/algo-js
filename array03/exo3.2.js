let array1 = [1, 2, 3, 4, 5];
let array2 = [101, 102, 103];
let totalDivision2 = 0; 
let totalDivision = 0; 
for(let indice = 0; indice<array1.length; indice++){
    totalDivision =  array1[indice]/2; 
}
console.log(Math.round(totalDivision)); 

for(let indice2 = 0; indice2<array2.length; indice2++){
    totalDivision2 = array2[indice2] / 2; 
}
console.log(totalDivision2);