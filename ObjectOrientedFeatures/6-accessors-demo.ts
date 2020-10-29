
/**
 * TypeScript also supports get/set accessors to access and to set the value to a
 * member of an object. This way, we can also control over how a member of an object
 * is accessed or set.
 *
 */

/*
class Employee {
   private _empCode: number;
   private _empSalary: number;

   // Get Accessor
   get empCode(): number {
       return this._empCode;
   }
   // set Accessor
   set empCode(newEmpCode: number) {
       this._empCode = newEmpCode;
   }

   // Get Accessor
   get empSalary(): number {
       return this._empSalary;
   }
   // set Accessor
   set empSalary(newSalary: number) {
       if (newSalary < 5000) {
           // console.log('Minimum Salary should be 5000..!!')
           throw new Error("Error : Minimum Salary should be 5000..!!")
       } else {
           this._empSalary = newSalary;
       }

   }

}

var emp = new Employee();
emp.empCode = 1002;
console.log(emp.empCode);
emp.empSalary = 2000;
console.log(emp.empSalary);
*/

// tsc .\6-accessors-demo.ts --target es6
// node .\6-accessors-demo.js