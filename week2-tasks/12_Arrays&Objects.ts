// Arrays and Objects

// array
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

let fruits: string[] = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits);

// object
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person: Person = {
    name: "Kenil",
    age: 21,
    isStudent: true
};

console.log(person.name);
console.log(person.age);