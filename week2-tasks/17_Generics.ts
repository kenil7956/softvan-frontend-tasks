// Generics


// 1. Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

let stringOutput = identity<string>("Hello, TypeScript!");
let numberOutput = identity<number>(42);


// 2. Generic Interfaces
interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = {
    first: "age",
    second: 30
};

let booleanArrayPair: Pair<boolean, boolean[]> = {
    first: true,
    second: [true, false, true]
};


// 3. Generic Classes
class Box<T> {
    contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    getContents(): T {
        return this.contents;
    }
}

let numberBox = new Box<number>(123);
console.log(numberBox.getContents());

let stringBox = new Box<string>("A box of text");
console.log(stringBox.getContents()); 
