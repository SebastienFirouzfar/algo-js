
function calculFibonacci() {
    let nbre1 = 0;
    let nbre2 = 1;
    let nbre3;
    for (let indice = 0; indice <= 10; indice++) {
        nbre3 = nbre1 + nbre2; //addition 0 + 1
        nbre1 = nbre2; //nbre 2 (1) vers nbre 1 (0) qui devient 1 2 et etc...
        nbre2 = nbre3; // nbre3 (1 grace à l'addition va vers) nbre2 (1) 
        console.log(nbre3); 
    }
}

console.log(calculFibonacci()); 