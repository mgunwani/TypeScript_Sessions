
/**
 *  A Class is a blue print or a User Defined Data Type.
 *  A Class is a collection of data members and member functions.
 *  Data Members are the variables at class level. (Attribute)
 *  Member Functions (Methods) are the function at class level. (Behaviour)
 */

/**
 *  var emp = new Employee();
 *  A variable of Employee Type.
 *  It is known an object i.e. the representator of a class.
 *  Whenever we declare the object, memory gets allocated to data members.
 *  Member Function gets memory when they are invoked.
 */

/* Demonstration 1: */
/*
class Employee {
   // Data Members (Attribute)
   empCode: number;
   empName: string;
   empAge: number;

   // Member Function (Methods or Behaviour)
   displayDetails() {
       console.log(`Employee Code : ${this.empCode}`)
       console.log(`Employee Name : ${this.empName}`)
       console.log(`Employee Age : ${this.empAge}`)
   }
}


var emp = new Employee();
console.log(`${emp.empCode} : ${emp.empName} : ${emp.empAge}`)
emp.displayDetails();
*/

