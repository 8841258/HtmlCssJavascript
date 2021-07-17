'use strict';

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {

        this._age = value < 0 ? 0 : value;
    }
}

const pooh = new Person('pooh', 5);
pooh.speak();
console.log(pooh.name);
console.log(pooh.age);

const user1 = new User('steve', 'job', -1);
console.log(user1.age);