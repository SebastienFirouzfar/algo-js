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
            this.topLeftYPos + this.lenght > otherRectangle.topLeftYPos){
                conflit = true;
            }
        return conflit;
    }
}

let rectangle = new Rectangle(1, 1, 2, 2);
let rectangle2 = new Rectangle(2, 2, 2, 2);
let rectangle3 = new Rectangle(1 ,1 ,2 ,2);
let rectangle4 = new Rectangle(3, 3, 2, 2)
console.log(rectangle.collides(rectangle2));  
console.log(rectangle2.collides(rectangle3)); 
console.log(rectangle3.collides(rectangle4)); 



