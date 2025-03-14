console.log("Objects.js is loaded...");

// Creating an Object - Object Literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '123 Street',
        city: 'New York',
        state: "NY"
    },
    getBirthYear: function() {
        return 2025 - this.age;
    }
}
console.log(person);

// 1. Accessing object properties

// Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

// Bracket notation
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']['city']);
console.log(person['getBirthYear']());

// 2. Adding properties
person.phone = "45678908786565";
console.log(person);

// 3. Modify properties
person.firstName = "abc";
console.log(person);

// 4. Delete properties
delete person.phone;
console.log(person);

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year:2022,
    getCar: function() {
        // return this.brand - this.model - this.year;
        return `The ${this.brand} - ${this.model} - ${this.year}`;
    }
}
let description = console.log(car.getCar());
console.log(description);

// Looping object properties 
for (let key in person) {
    console.log(key, person[key]);
    console.log(person[key]);
}

// Object Destructing
let { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
// console.log(hobbies);

// Built-in object functions

// 1. Object.keys()
console.log(Object.keys(person));

// 2. Object.values()
console.log(Object.values(person));

// 3. Object.entries()
console.log(Object.entries(person));

// class definition
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getDescription() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let student = new Student('John', 'Doe', 30);
console.log(student);