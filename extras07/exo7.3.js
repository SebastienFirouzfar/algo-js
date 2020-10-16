const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question("Enter a positive integer n "));
let arr = new Array;
if (n >= 0) {
    //on divise n par 2
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    if (arr[0] == null) {
        console.log(n + " is a prime number");
    }
    else {
        console.log("divisors of " + n + " are: " + arr);
    }
} else {
    console.log("It's not a positive integer")
}