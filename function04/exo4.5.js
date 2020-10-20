function sqr(a) {
    return a*a;
}
 
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
} 

console.log(Distance(1, 1, 2, 2)); 