
/**
 * Generics:
 *      - Follows a DRY principle i.e. write dynamic and resusable code.
 *      - We can apply generics in TS to classes, interfaces and functions.
 */

/*
function print1(value: number): number {
   return value;
}
function print2(value: string): string {
   return value;
}
function addition1(value1: number, value2: number): number {
   return value1 + value2;
}
function addition2(value1: string, value2: string): string {
   return value1 + value2;
}
console.log(print1(100));
console.log(print2("Hello World"));
console.log("**********************")
console.log(addition1(100, 200));
console.log(addition2("Bhawna", "Gunwani"));
*/

/*
function printing<T>(value: T): T {
    return value;
}

console.log(printing<string>("Hello World"));
console.log(printing<number>(10));

function addition<T>(value1: T, value2: T): T {
    return <any>value1 + <any>value2;
}

console.log(addition<number>(1, 2));
*/

