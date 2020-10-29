
/**
 *  Data Members of Class:
 *      1. Instance(Object) Members
 *          - Instance Members are members of class type and its instance.
 *          - Within constructor, function or properties, they represents to the object of a class.
 *          - Memory gets allocated to instance members whenever an object is created.
 *
 *      2. Static Members
 *          - They are declared with static keyword.
 *          - These members will represent to/by the class not by the instance.
 *          - Memory gets allocated only once to static members.
 *          - They don't belong to object. they always belongs to class.
 *          - Memory gets allocated to static member only once just before creating the very first object of a class.
 */

/*
class Employee {
    // Instance Data Members (Attribute)
    private empCode: number;
    private empName: string;
    private empAge: number;

    // Static Data Members
    readonly companyName: string;
    private static country: string;

    constructor(eCode: number, eName: string, eAge: number) {
        this.empCode = eCode;
        this.empName = eName;
        this.empAge = eAge;
        this.companyName = "Simplilearn";
        Employee.country = "India";
    }

    // Member Function (Methods or Behaviour)
    displayDetails() {
        console.log(`Employee Code : ${this.empCode}`)
        console.log(`Employee Name : ${this.empName}`)
        console.log(`Employee Age : ${this.empAge}`)
        console.log(`Comapny Name : ${this.companyName}`)
        console.log(`Country Name : ${Employee.country}`)
    }
}



var emp1 = new Employee(1001, "Kartik Sharma", 23);
var emp2 = new Employee(1002, "Gautam Bhalla", 34);
emp1.companyName = "Simplilearn Pvt. Ltd.";
emp1.displayDetails();
console.log("-------------------------------------------------------------")
emp2.displayDetails();
*/