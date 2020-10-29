
/*
class Student {
    private ID: number;
    private Name: string;
    private Age: number

    constructor(id: number, name: string, age: number) {
        this.ID = id;
        this.Name = name;
        this.Age = age
    }
    displayDetails() {
        console.log(`ID : ${this.ID} : Name : ${this.Name} : Age : ${this.Age}`)
    }
}

class Marks extends Student {
    protected ObjMarks: number;
    protected SubjMarks: number;

    constructor(id: number, name: string, age: number, ObjMarks: number, SubjMarks: number) {
        super(id, name, age);
        this.ObjMarks = ObjMarks;
        this.SubjMarks = SubjMarks;
    }
    displayDetails() {
        super.displayDetails();
        console.log(`ObjMarks : ${this.ObjMarks} : SubjMarks : ${this.SubjMarks}`)
    }
}

class Sports extends Marks {
    protected Score: number;

    constructor(id: number, name: string, age: number, ObjMarks: number, SubjMarks: number, score: number) {
        super(id, name, age, ObjMarks, SubjMarks);
        this.Score = score;
    }
    displayDetails() {
        super.displayDetails();
        console.log(`score : ${this.Score}`)
    }
}

class Result extends Sports {
    private totalMarks;
    private averageMarks;

    calculateResult() {
        this.totalMarks = this.ObjMarks + this.SubjMarks + this.Score;
        this.averageMarks = this.totalMarks / 3;
        console.log(`Total Marks : ${this.totalMarks} : Avg marks : ${this.averageMarks}`)
    }
}

var result = new Result(123, "King", 23, 56, 78, 45);
result.displayDetails();
result.calculateResult();
*/