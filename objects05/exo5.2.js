const readlineSync = require("readline-sync");

function askTvSerie() {
    
    let infomation = {
        nameSerie: readlineSync.question('Donnez moi le nom de votre serie '),
        producYear: readlineSync.question('Donnez moi l annee de votre serie '),
        nameCasting: askmembers(),
    };
    return infomation;
}


function askmembers(){
    let cast_members_array = [];
    let cast_member = "";
    //tant que cast de member ou du tableau est vide
    while ((cast_member!=="") || (cast_members_array[0]==null)){
        cast_member = readlineSync.question("Give me a cast member : ");
        if(cast_member!==""){
            cast_members_array.push(cast_member);
        }
        if (cast_members_array[0]==null){
            console.log("I need at least one cast member but once it's done, if you want to stop, you can just type nothing and enter.");
        }
    }
    return cast_members_array;
}




let tvSerie = askTvSerie();
function randomizeCast(tvSerie) {
    let temp = 0;
    let other;
    for (let i = 0; i < tvSerie.nameCasting.length; i++) {
        other = Math.floor(Math.random() * tvSerie.nameCasting.length - 1);
        temp = tvSerie.nameCasting[i];
        tvSerie.nameCasting[i] = tvSerie.nameCasting[other]; 
        tvSerie.nameCasting[other] = temp;  
    }
    return tvSerie; 
}
console.log(); 
console.log(randomizeCast(tvSerie)); 
