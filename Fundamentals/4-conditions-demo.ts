
/*
var num: number = 100;
if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
*/

/*
var num: number = 100;
if (num > 0) {
    console.log("Positive");
} if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
*/

/*
var num: number = 100;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
*/

var age: number = 19;
if (age >= 18) {
    console.log("You are valid to give vote.")
} else {
    console.log("You are not valid to give vote.")
}

// Turnery Operator (Conditional Operator): Shortcut of if..else statement
// (condition) ? (True-Expression) : (False-Expression);

var age: number = 9;
var result: any = (age >= 18) ? "Valid to Vote" : "Not Valid to Vote";
console.log(result);

var num: number = 0;
result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(result);

num = 100;
result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(result);








