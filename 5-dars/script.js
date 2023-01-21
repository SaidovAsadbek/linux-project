"use strict";

// Object Non Primitive or Reference

// create a new object step
// step 1 object literal
// const obj1 = {
//     name: "John",
//     age: 20,
//     // sayHello: function () { // es5
//     //     console.log(`Hello, my name is ${this.name}`);
//     // },

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// step 2 Object constructor
// const obj2 = new Object();

// obj1.sayHello(); // Dot Notation
// obj1["age"]; // Square Bracket Notation

// console.log(obj1, obj1);

// function getInfo(key, value) {
//     return {
//         [key]: value,
//     };
// }

// let person = getInfo("name", "John");
// let person2 = getInfo("age", 19);

// console.log(person);
// let firstName = ''

// let user = {
//     firstName,
//     age: 19
// }

// check user includes data
// console.log('age' in user );

// console.log(user);

let user = {
    fullName: "John Doe",
    age: 19,
    email: "envkt@example.com",
};

for (let key in user) {
    user[key] = user[key] + 1;
}

console.log(user);
