// Index signatures, key of assertions

// Index Signatures
interface StringDictionary {
    [key: string]: string;
}

let myDictionary: StringDictionary = {
    "name": "Kenil",
    "city": "Ahmedabad",
    "country": "India"
};

console.log(myDictionary["name"]);
console.log(myDictionary["city"]);



// `keyof` with Type Assertions
interface Person {
    name: string;
    age: number;
    location: string;
}

function getValue(obj: Person, key: keyof Person): string | number {
    return obj[key];
}

let person: Person = {
    name: "Kenil",
    age: 21,
    location: "Ahmedabad"
};

let nameValue = getValue(person, "name");
let ageValue = getValue(person, "age");

let dynamicKey = "name";
let value = getValue(person, dynamicKey as keyof Person);
console.log(value);  
