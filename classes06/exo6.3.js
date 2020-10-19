class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    }

    collides(otherRectangle) {
        // X
        let conflit = false;
        //si le top left x post est plus petit que l'addition et que le top left x post est plus grand que le top left x
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
            this.topLeftYPos + this.lenght > otherRectangle.topLeftYPos) {
            conflit = true;
        }
        return conflit;
    }
}

function NumberRandom(n){
    return Math.floor(Math.random()* n ) + 1; 
}

let indice = 0;
let rectablesNumber = [];
for(let indice = 1; indice <=20; indice++){
    let rectangle = new Rectangle(NumberRandom(100), NumberRandom(100), NumberRandom(100),NumberRandom(100)); 
    rectablesNumber.push(rectangle); 
}

for(let i = 0; i < rectablesNumber.length-1; i++){    
    for(let j = i + 1; j < rectablesNumber.length; j++){
        console.log(rectablesNumber[i].collides(rectablesNumber[j])); 
    }
}
    
/**
 * while (indice < 5) {
    let aleatoire1 = Math.floor(Math.random() * 11);
    let aleatoire2 = Math.floor(Math.random() * 11);
    let aleatoire3 = Math.floor(Math.random() * 11);
    let aleatoire4 = Math.floor(Math.random() * 11);

    let resultat = new Rectangle(aleatoire1, aleatoire2, aleatoire3, aleatoire4);
    let resultat2 = new Rectangle(aleatoire1, aleatoire2, aleatoire3, aleatoire4);
    console.log(resultat);
    if (resultat.collides(resultat2)) {
        console.log("conflit");
    }else{
        console.log("pas en conflit"); 
    }
    indice++;
}
 */

