class Circle {
    constructor(xPost, yPost, radius) {
        this.xPost = xPost;
        this.yPost = yPost;
        this.radius = radius
    }

    move(xOffset, yOffset) {
        this.xPost += xOffset; 
        this.yPost += yOffset
    }

    get surface() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(3,2,5);
console.log(circle.surface);
circle.move(-1,5);
console.log(circle);