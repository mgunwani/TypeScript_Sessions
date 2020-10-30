
export { Student as St } from "./myModules";

export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showDetails() {
        console.log(`${this.name} ${this.age}`)
    }
}