
/**
 * Data Types in TypeScript:
 *  1. String
 *  2. Number
 *  3. Boolean
 *  4. Array
 *  5. Tuple
 *  6. Enum
 *  7. Union
 *  8. Any
 *  9. Void
 *  10. Never
 */

// String Type:

// var firstName: string = 'John';
// var lastName: string = "Smith";
// console.log(firstName + ' ' + lastName)

// var str: string = 'Hello TypeScript';
// console.log(str.charAt(0));
// console.log(str.charAt(2));

// var str1: string = 'Hello';
// var str2: string = 'TypeScript';
// console.log(str1.concat(str2));
// console.log(str1.concat(' ', str2));
// console.log(str1.concat(' Mr. ', 'Bond'));

// -----------------------------------------------

// Boolean Type: (true/false)

// var isPresent: boolean = true;
// if (isPresent)
//     console.log('Good..')
// else
//     console.log('Bad')

// -----------------------------------------------

// Array Type:

// var names: Array<string>;
// names = ["John", "Smith", "Karah"];
// var names: Array<string> = ["John", "Smith", "Karah"];
// console.log(names)
// var values1: Array<string | number> = [101, "John", 102, "Smith"];
// console.log(values1);
// var values2: (string | number)[] = [101, "John", 102, "Smith"];
// console.log(values2);

// var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
// fruits.sort();
// console.log(fruits);        // ["Apple", "Banana", "Orange"]
// console.log(fruits.pop());  // Orange
// fruits.push('Papaya');
// console.log(fruits);        // ["Apple", "Banana", "Papaya"]
// fruits = fruits.concat(['Fig', 'Mango']);
// console.log(fruits);        // ["Apple", "Banana", "Papaya", "Fig", "Mango"]
// console.log(fruits.indexOf('Papaya'));  // 2

// -----------------------------------------------

// Tuple Type: a new data type that can contain two values of differnt data type in one variable.

// var customerCode: number = 1001;    // Variable
// var customerName: string = "King";  // Variable
// var customerDetail: [number, string] = [1001, "King Kochhar"];  // Tuple
// console.log(customerDetail);

// var userDetail: [number, string, boolean, number, string];  // Declaring a Tuple
// userDetail = [101, 'King', true, 20, "Admin"];  // Initializing a Tuple
// console.log(userDetail);


// var customerDetail: [number, string][];
// customerDetail = [[1001, "Kochhar"], [1002, "Shreya"], [1003, "Smith"]];
// console.log(customerDetail);
// for (var [x, y] of customerDetail) {
//     console.log([x, y])
// }

// var customerDetail: [number, string] = [1001, "Kochhar"];
// customerDetail.push(1002, "Bhawna");
// customerDetail.push(1003, "Shreya");
// console.log(customerDetail);

// var customerDetail: [number, string] = [1001, "Kochhar"];
// console.log(customerDetail[0]);
// console.log(customerDetail[1]);
// customerDetail[1] = customerDetail[1].concat(" Something");
// console.log(customerDetail[0]);
// console.log(customerDetail[1]);

// -----------------------------------------------

// Union Type:

// var experience: number | string;
// experience = 2;
// experience = "2 Years"
// // experience = false; // Compile Time Error

// function displayType(code: (string | number)) {
//     if (typeof (code) === "number")
//         console.log('Code is number.')
//     else if (typeof (code) === "string")
//         console.log('Code is string.')
// }
// displayType(123);
// displayType("ABC");
// // displayType(true);  // Compiler Time Error

// -----------------------------------------------

// Any Type:

// var value: any = "Something here..";
// value = 123;
// value = true
// console.log(value);

// -----------------------------------------------

// Void Type:

// function sayHello(): void {
//     console.log("Hello to Everyone!!")
// }
// function sayBye(): string {
//     return "Bye to Everyone";
// }
// sayHello();
// console.log(sayBye());
// var value: void = undefined;    // Valid
// var value: void = null;         // Valid
// var value: void = 1;            // Not Valid

// void means no data.
// only null or undefined is assigned to a variable of void type.

// ---------------------------------------------

// Never Type:

// Never cannot have any value.

// var value: void = null;
// var value: number = 100;
// var value: never = 1001;    // Error

// function throwError(errorMessage: string): never {
//     throw new Error(errorMessage);
// }

// ---------------------------------------------

// Enum Type:

/**
 * String Enum
 * Numeric Enum
 * Hetrogeneous Enum
 */

enum Directions1 {
    South,      // 0
    North,      // 1
    East,       // 2
    West        // 3
}

enum Directions2 {
    South = 10,      // 10
    North,           // 11
    East,            // 12
    West             // 13
}

enum Directions3 {
    South = 100,      // 10
    North = 200,      // 11
    East = 250,       // 12
    West = 300        // 13
}

enum Directions4 {
    South = "SD",      // SD
    North = "ND",      // ND
    East = "ED",       // ED
    West = "WD"        // WD
}

enum Directions5 {
    South = "SD",       // SD
    North = "ND",       // ND
    East = 200,         // ED
    West = 300          // WD
}

console.log(Directions4.South);
console.log(Directions4["East"]);
console.log(Directions5[200]);






