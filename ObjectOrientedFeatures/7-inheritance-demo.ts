
/**
 *      Inheritance helps in reusability of code and to reduce the time and efforts of developer.
 *      We can acquire the features and behaviours of a class into another class.
 *      Parent Class/Super Class/Base Class
 *      Child Class/Sub Class/Derived Class
 *
 */

/*
class Person {
   private name: string;
   private age: number;
   private city: string;

   constructor(name: string, age: number, city: string) {
       console.log('Person contructor called..')
       this.name = name;
       this.age = age;
       this.city = city;
   }

   displayDetails(): void {
       console.log(`Name : ${this.name} :
       Age : ${this.age} : City : ${this.city}`)
   }
}

// Employee class inherits the Person class
class Employee extends Person {
   private salary: number;
   private jobType: string;

   constructor(name: string, age: number, city: string,
       salary: number, jobType: string) {
       super(name, age, city);
       console.log('Employee Constructor Called..')
       this.salary = salary;
       this.jobType = jobType;
   }

   displayDetails(): void {
       super.displayDetails();
       console.log(`Salary : ${this.salary} :
       "JobType : ${this.jobType}`)
   }
}

var emp = new Employee("King", 23, "New York", 12000,
   "Permanent");
emp.displayDetails();
*/