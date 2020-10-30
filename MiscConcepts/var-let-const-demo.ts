
/**
 * Variables in TS can be declared using let, var and const.
 *  var is function scoped.
 *  let & const is block scoped.
 *  var variables can be redefined or updated
 *  var can be accessed before they are declared (Hoisting)
 *  const cannot be reassigned.
 */

/*
var value = 100;
function func() {
   if (true) {
       value = 200;    // Defined Locally (the scope ends when curly brace ends)
       console.log(value); // 200
   }
   console.log(value);     // 200
}
func();
console.log(value);         // Error, variable is not defined..
*/

/*
function func() {
    if (true) {
        let value = 200;    // Defined Locally (the scope ends when curly brace ends)
        console.log(value); // 200
    }
    // console.log(value);     // Error
}
func();
// console.log(value);         // Error, variable is not defined..
*/


const value = 100;
function func() {
    if (true) {
        value = 200;    // Defined Locally (the scope ends when curly brace ends)
        console.log(value); // 200
    }
    console.log(value);     // 200
}
func();
console.log(value);         // Error, variable is not defined..