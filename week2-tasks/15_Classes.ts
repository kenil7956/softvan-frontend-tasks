// Classes

class Person {
    private name: string;
    protected age: number;
    public isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }

    public introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }

    protected getAge(): number {
        return this.age;
    }
}

let person1 = new Person("Kenil", 21, true);

console.log(person1.introduce());


