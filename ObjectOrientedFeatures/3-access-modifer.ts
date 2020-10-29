/**
 * Three Access Modifiers Support:
 *
 *  1. Public: By Default
 *      All members of a class are by default public.
 *      So, you don't need to prefix members with public keyword.
 *      They will be accessinble everywhere without restrictions.
 *
 *  2. Private
 *      A private member cann't be accessed outside of its containing class.
 *      It's accessible within its own class.
 *
 *  3. Protected
 *      A protected member cannot be accessed outside of its containing class.
 *      But, protected members can be accessed within its own class and within the sub classes (in case of Inheritance).
 *
 */

/*
class Employee {
   // Data Members (Attribute)
   private empCode: number;
   private empName: string;
   private empAge: number;

   constructor(eCode: number, eName: string, eAge: number) {
       this.empCode = eCode;
       this.empName = eName;
       this.empAge = eAge;
   }

   // Member Function (Methods or Behaviour)
   displayDetails() {
       console.log(`Employee Code : ${this.empCode}`)
       console.log(`Employee Name : ${this.empName}`)
       console.log(`Employee Age : ${this.empAge}`)
   }
}


var emp1 = new Employee(1001, "Kartik Sharma", 23);
// console.log(`${emp1.empCode} : ${emp1.empName} : ${emp1.empAge}`)
emp1.displayDetails();

var emp2 = new Employee(1002, "Gautam Bhalla", 34);
// console.log(`${emp2.empCode} : ${emp2.empName} : ${emp2.empAge}`)
emp2.displayDetails();
*/