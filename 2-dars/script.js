// Data Types

//  Primitive
// 1. Number
// 2. Undefined
// 3. String
// 4. Null
// 5. Symbol
// 6. BigInteger
// 7. Boolean

// NoN  Primitive
// 8. Object

// Primitive vs NoN Primitive

// let firstName = "Asadbek";

// firstName = 19;
// console.log(firstName); // Primitive data type o'zgaradi

// let obj = {
//     name: "Asadbek",
//     age: 19
// }

// console.log(obj); // NoN Primitive o'zgarmaydi

// Type Conversions Example: string change number. more...
// change data types

// let age = "19";
// console.log(typeof Number(age));
// console.log(null == undefined);

// to Number numeric conversion
// 1. Number(dataType); // Number(true) = 1
// 2. +dataType // +"10"

// to String string conversion
// String(dataType); // String(true) = "true"

// to Boolean boolean conversion
// Boolean(dataType); // Boolean(true) = true
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean("checked")); // true

// console.log(Boolean(0n));
// console.log(!!5) Boolean short code
// !!5 == Syntax Sugar

// Basic operators, maths
// + , - , / , * , % , **
// 5 % 2 remenders  bu 5 / 2 = 1

// Concatenation
// "hello" + "world" =  "helloworld";

// syntax sugar
// let n = 2;
// n += 5;
// n *= 2;

// console.log(n)

// n++ post fix
// ++n pre fix

// Comparisons
// >, <, >=, <=, ==, ===

// istisno null va undefined faqat uziga va bir biriga teng
// null
// null == undefined; null == null;
// null == undefined; null == null;

// undefined
// undefined == undefined; undefined == null;

// null == 0; // false
// null > 0; // false
// null < 0; // false
// null >= 0; // true

// String
// "a" > "A" // true kichik kattadan kuchli buladi
// "z" > "a" // true ketma-ketlik

// "asadbek" < "Asadbek" // false
// "asadbek" > "Asadbek" // true

// let age = 19;

// if(age < 39) {
//     console.log("Your age " + age);
// } else if(age == 20) {
//     console.log("Your age " + age);
// }
