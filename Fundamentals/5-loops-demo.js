/**
 * TypeScript supports five types of loops(iteration):
 * 1. for loop: iterates based upon the iteration variable.
 * 2. for..of loop: iterates the elements of collections.
 * 3. for..in loop: iterates the index elements.
 * 4. while loop: iterates based upon the iteration variable.
 * 5. do..while loop: iterates based upon the iteration variable or user choice.
 */
// for (var i = 1; i <= 5; i++) {
//     console.log("Hello Everyone.. " + i);
// }
// console.log(i);
// ---------------------------------------- //
// var i: number = 7;
// while (i <= 10) {
//     console.log(i);
//     i = i + 1;
// }
// ---------------------------------------- //
// var i: number = 100;
// do {
//     console.log(i);
//     i++;
// } while (i <= 105);
// ---------------------------------------- //
// * 2. for..of loop: iterates the elements of collections.
// * 3. for..in loop: iterates the index elements.
var values = [10, 20, 30, 40, 50];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
console.log("*****************");
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var val = values_1[_i];
    console.log(val);
}
console.log("*****************");
for (var v1 in values) {
    console.log(v1 + " : " + values[v1]);
    // console.log(values[v1]);
}
