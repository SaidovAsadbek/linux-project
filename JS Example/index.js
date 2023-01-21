"use strict";

// function feast(beast, dish) {
//     //your function here
//     return (
//         beast[0] === dish[0] &&
//         beast[beast.length - 1] === dish[dish.length - 1]
//     );
// }

// console.log(feast("great blue heron", "garlic naan")); // true)
// console.log(feast("chickadee", "chocolate cake")); // true)
// console.log(feast("brown bear", "bear claw")); //  false)

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let s = Math.min(...args);
//         console.log(s);
//     }
// }

// let s = new SmallestIntegerFinder();

// s.findSmallestInt([78, 56, 232, 12, 8]); // 8
// s.findSmallestInt([78, 56, -232, 12, 8]); // -232
// s.findSmallestInt([78, 56, 232, 12, 8, 5, -1]); // -1

// // toq * 9 || juft * 8
// function n(number) {
//     // your code........
//     return number * (number % 2 ? 9 : 8);
// }

// console.log(n(2)); // 16
// console.log(n(1)); // 9

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     return dna.replace(/t/gi, "U");
// }

// console.log(DNAtoRNA("TTTT"));

// Ofisdagi og'ir chorakdan so'ng siz ta'tilda dam olishga qaror qildingiz. Shunday qilib, siz va qiz do'stingiz uchun parvozni bron qilasiz va barcha tartibsizliklarni orqangizda qoldirishga harakat qilasiz.

// Ta'tilda sayohat qilish uchun sizga ijara mashinasi kerak bo'ladi. Avtomobil ijarasi menejeri sizga yaxshi takliflar beradi.

// Har kuni mashina ijarasi 40 dollar turadi. Agar siz mashinani 7 yoki undan ortiq kunga ijaraga olsangiz, jami 50 dollar chegirma olasiz. Shu bilan bir qatorda, agar siz mashinani 3 yoki undan ortiq kunga ijaraga olsangiz, jami 20 AQSh dollari miqdorida chegirma olasiz.

// Turli kunlar uchun umumiy miqdorni ko'rsatadigan kodni yozing(d).

// function rentalCarCost(d) {
//     if (d < 3) return d * 40;
//     if (7 > d && d >= 3) return d * 40 - 20;
//     if (d >= 7) return d * 40 - 50;
// }

// console.log(rentalCarCost(1)); // 40
// console.log(rentalCarCost(2)); // 80
// console.log(rentalCarCost(3)); // 100 // 20$ sale
// console.log(rentalCarCost(4)); // 140
// console.log(rentalCarCost(5)); // 180
// console.log(rentalCarCost(6)); // 220
// console.log(rentalCarCost(7)); // 230 // 20$ sale
// console.log(rentalCarCost(8)); // 270
// console.log(rentalCarCost(9)); // 310
// console.log(rentalCarCost(10)); // 350

// function doubleChar(str) {
//     let text = str.split("");
//     let a = "";
//     for (let i = 0; i < text.length; i++) {
//         a += text[i] + text[i];
//     }
//     return a;
// }

// console.log(doubleChar("abc"));
// console.log(doubleChar("123"));

// function litres(time) {
//     return Math.floor(time * 0.5);
// }

// console.log(litres(2)); // 1

// //
// function points(games) {
//     let total = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] === games[i][2]) {
//             total += 1;
//         } else if (games[i][0] > games[i][2]) {
//             total += 3;
//         }
//     }
//     return total;
// }

// console.log(
//     points([
//         "1:0",
//         "2:0",
//         "3:0",
//         "4:0",
//         "2:1",
//         "3:1",
//         "4:1",
//         "3:2",
//         "4:2",
//         "4:3",
//     ])
// ); // 30

// points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]); // 10

//
// function getGrade(...scores) {
//     // Code here
//     let points = scores.reduce((a, b) => a + b) / scores.length;

//     if (points >= 90) return "A";
//     else if (points >= 80) return "B";
//     else if (points >= 70) return "C";
//     else if (points >= 60) return "D";
//     else return "F";
// }

// console.log(getGrade(95, 90, 93)); // A
// console.log(getGrade(89, 89, 90)); // A
// console.log(getGrade(75, 70, 79)); // A

// Gravity Flip
// function flip(x, y) {
//     return y.sort((a, b) => (x === "L" ? b - a : a - b));
// }

// console.log(flip("R", [3, 2, 1, 2]));
// console.log(flip("R", [5, 8, 2, 4, 3, 1]));

// function correct(str) {
//     // your code here
//     return str.replace(/0|5|1/gi, (x) => {
//         if (x === "0") return "O";
//         else if (x === "5") return "S";
//         else if (x === "1") return "I";
//     });
// }

// console.log(correct("L0ND0N"));
// console.log(correct("51NGAP0RE"));
// console.log(correct("DUBL1N"));

//
// function powersOfTwo(n) {
//     let arr = [];
//     for (let i = 0; i <= n; i++) {
//         arr.push(Math.pow(2, i));
//     }
//     return arr;
// }

// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(2));
// console.log(powersOfTwo(4));

// function repeatStr(n, s) {
// step 1
// let str = "";
// for (let i = 0; i < n; i++) {
//     str += s;
// }
// return str;

// step 2
// return s.repeat(n);
// }

// console.log(repeatStr(3, "a")); // "aaa"
// console.log(repeatStr(4, "*")); // "****"

//
// function isPalindrome(x) {
//     // your code here
//     const sp = x.toLowerCase().split("");
//     const sp1 = x.toLowerCase().split("");
//     let r = sp1.reverse();

//     if (sp.toString() != r.toString()) {
//         return false;
//     }
//     return true;
// }

// console.log(isPalindrome("a"));
// console.log(isPalindrome("Abba"));
// console.log(isPalindrome("hello"));

//
// function DNAStrand(dna) {
//your code here
// step 1
// return dna.replace(/A|T|C|G/gi, (x) => {
//     if (x === "A") return "T";
//     else if (x === "T") return "A";
//     else if (x === "C") return "G";
//     else if (x === "G") return "C";
// });

// step 2
// return dna.replace(/./g, (all) => "CGAT"["GCTA".indexOf(all)]);
// }

// console.log(DNAStrand("AAAA")); // "TTTT"
// console.log(DNAStrand("ATTGC")); // "TAACG"
// console.log(DNAStrand("GTAT")); // "CATA"

// function SeriesSum(n) {
//     let str = 0;
//     for (let i = 0; i < n; i++) {
//         str += 1 / (1 + i * 3);
//     }
//     return str.toFixed(2);
// }

// console.log(SeriesSum(1)); // 1.00
// console.log(SeriesSum(2)); // 1.25
// console.log(SeriesSum(3)); // 1.39

//
// function getSum(a, b) {
//     //Good luck!
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return ((max - min + 1) * (max + min)) / 2;
// }

// let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;

// console.log(getSum(0, -1)); // -1
// console.log(getSum(0, 1)); // 1
// console.log(getSum(-523, 569)); // 1
// console.log(getSum(4, 14)); // 1

// triangle
// function rowSumOddNumbers(n) {
//     // TODO
//     return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1)); // 1
// console.log(rowSumOddNumbers(2)); // 3 + 5 = 8

// function solution(str){
//     let key = str.split('');
//     return key.reverse().join("")
// }

// console.log(solution("Hello"));

// function countBy(x, n) {
//     let z = [];

//     for (let i = 1; i <= n; i++) {
//         console.log(x * i);
//     }

//     return z;
// }

// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9, 10];
// console.log(countBy(2, 5)); // [1,2,3,4,5,6,7,8,9, 10];

//
// function findNeedle(haystack) {
//     // your code here
//     let idx = haystack.indexOf("needle");
//     return `found the needle at position ${idx}`;
// }

// console.log(
//     findNeedle([
//         "3",
//         "123124234",
//         undefined,
//         "needle",
//         "world",
//         "hay",
//         2,
//         "3",
//         true,
//         false,
//     ])
// );

// function sumArray(array) {
//     let arr = array || [];
//     return arr
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((a, b) => a + b, 0);
// }

// console.log(sumArray(null)); // 0
// console.log(sumArray([0, 5, 2, 4])); // 3
// console.log(sumArray([6, 2, 1, 8, 10])); //

//

function fakeBin(x) {
    // step 1
    // let arr = x.split("");
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] >= 5) {
    //         newArr.push(arr[i].replace(arr[i], "1"));
    //     } else {
    //         newArr.push(arr[i].replace(arr[i], "0"));
    //     }
    // }
    // return newArr.join("");
    // step 2
    // return x.split('').map(n => n < 5 ? 0 : 1).join('');
    // step 3
    // return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}

// console.log(fakeBin("45385593107843568")); // 01011110001100111

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]; // fix me!
// }

// // minMax([1, 2, 3, 4, 5]);
// console.log(minMax([1, 2, 3, 4, 5]));

//
// function friend(friends) {
//     return friends.filter((f) => f.length == 4);
// }

// console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryna", "Mark"]

// function func(str) {
//     return str.slice(1, -1);
// }

// console.log(func("Asadbek"));

// function oddOrEven(array) {
//     //enter code here
//     return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }

// console.log(oddOrEven([0]));// even
// console.log(oddOrEven([0, 1, 5])); // even
// console.log(oddOrEven([0, 1, 6])); // odd

// var number = function (array) {
//     //your awesome code here
//     let arr = [];
//     array = array || [];
//     for (let i = 0; i < array.length; i++) {
//         arr.push(`${i + 1} :` + array[i]);
//     }
//     return arr;
// };

// console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]

// function sumTwoSmallestNumbers(numbers) {
//     //Code here
//     let n = numbers.sort((a, b) => a - b).slice(0, 2);
//     return n[0] + n[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24

// function positiveSum(arr) {
//     let s = 0;
//     arr.filter((a) => {
//         if (a > 0) {
//             s += a;
//         }
//     });
//     return s;
// }

// console.log(positiveSum([1, -2, 3, 4])); // 8

// var countSheep = function (num) {
//     //your code here
//     let str = "";
//     if (num > 0) {
//         for (let i = 1; i <= num; i++) {
//             str += `${i} sheep...`;
//         }
//     } else {
//         return "";
//     }
//     return str;
// };

// console.log(countSheep(0)); // ""
// console.log(countSheep(1)); // "1 sheep..."
// console.log(countSheep(2)); // "1 sheep... 2 sheep..."

// function solution(str, ending) {
//     // TODO: complete
//     if (str.indexOf(ending)) {
//         return true;
//     } else return false;
// }

// console.log(solution("abcde", "abc")); // false
// console.log(solution("abcde", "cde")); // true

// function nbYear(p0, percent, aug, p) {
//     for (var i = 0; p0 < p; i++) {
//         p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
//     }
// }

// console.log(nbYear(1500, 5, 100, 5000)); // 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10

// alert("Begin!");

// const value = prompt("Enter your username:");

// if (value) {
//     if (value === "admin") {
//         const password = prompt("Enter your password:");
//         if (password == "1234" && password) {
//             alert("Login Successfully");
//         } else {
//             alert("Password do not match");
//         }
//     } else {
//         alert("Username incorrect!");
//     }
// } else {
//     alert("Can't connect");
// }

// function check(a, x) {
//     return a.includes(x);
// }

// console.log(check([66, 101], 66)); // true

// function noSpace(x) {
// console.log(x.replace(/\s/g, ""));
// console.log(
//     x
//         .split("")
//         .filter((e) => e.trim().length)
//         .join("")
// );
// }

// console.log(noSpace("b hhjibh nkkn m    m")); // bhhjibhnkknmm

// function booleanToString(x) {
//     console.log(x.toString())
// }

// booleanToString(true); // "true"

// function highAndLow(numbers) {
//     // ...
//     let arr = numbers.split(" ");
//     return `${Math.max(...arr)} ${Math.min(...arr)}`;
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 , -9

// function removeSmallest(numbers) {
//     let index = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
// }

// // console.log(removeSmallest([1, 2, 3, 4, 5])); // [2,3,4,5]
// console.log(removeSmallest([6, 2, 5, 1, 5])); // [6,2,5,5]

// function myFunction(a, n) {
//     // return a.charAt(n - 1);
//     return a[n - 1];
// }
// let func = myFunction("abcd", 1);

// console.log(func);

// function myFunction(a) {
//     // return a.slice(0, a.length / 2)
//     // return a.slice(0, -3);
// }

// let func = myFunction("abcde");

// console.log(func);

// function myFunc(a, b, c, d, e, f) {
//     let res = (((a + b - c) * d) / e) ** f;
//     console.log(res);
// }

// let result = myFunc(6, 5, 4, 3, 2, 1); // 10.5

// console.log(result);

// function myFunc(a, b) {
//     let str = "";
//     // if (a.includes(b)) {
//     //     str = b + a;
//     // } else {
//     //     str = a + b;
//     // }

//     if (a.indexOf(b) === -1) {
//         return a + b;
//     } else {
//         return b + a;
//     }
//     // return a.indexOf(b) === -1 ? a + b : b + a
// }

// let instance = myFunc("lips", "s");

// console.log(instance);

// function myFunc(a, b) {
//     // let count = 0;
//     // for (let i = 0; i < b.length; i++) {
//     //     if (b.charAt(i) == a) {
//     //         count += 1;
//     //     } else {
//     //         count;
//     //     }
//     // }
//     // return count;

//     return b.split(a).length - 1;
// }

// let instance = myFunc(
//     "m",
//     "how many times does the character occur in this sentence?"
// );

// console.log(instance);

// function calc(a) {
//     // butun son
//     // return a % 1 == 0 ? true : false;
//     // return a - Math.floor(a) === 0;
// }

// let init = calc(4); // true
// console.log(init);

// function sum(a) {
//     return String(a).split("").map(Number);
// }

// let init = sum(10); //[1, 0];

// console.log(init);

// function getInArr(a, n) {
//     console.log(a[n - 1]);
// }

// let res = getInArr([7, 2, 1, 6, 3], 1); // 3

// function myFunc(a) {
//     // let n = 0;
//     // for (let i = 0; i < a.length; i++) {
//     //     if (a[i] < 0) {
//     //         n += 1;
//     //     }
//     // }
//     // console.log(n);
//     return a.filter((el) => el < 0).length;
// }

// let as = myFunc([1, -2, 2, -4]); // 2
// console.log(as);

// o'rtacha qiymati
// let arr = [10, 100, 1000];
// let result = arr.reduce((acc, el) => acc + el, 0) / arr.length;

// console.log(result);
// function myFunc(arr) {
//     return arr.reduce((a, b) => (a.length > b.length ? a : b));
// }

// let init = myFunc(["help", "me"]); // 'help'

// console.log(init);

// function myFunc(arr) {
//     // return arr.every((elem) => elem === arr[0]);
//     return new Set(arr).size === 1;
// }

// let init = myFunc(["test", "test", "test"]); // 'help'

// console.log(init);

// function myFunc(...arr) {
//     // let newArr = [];
//     // arr.forEach((n) => n.forEach((elem) => newArr.push(elem)));
//     // console.log(newArr);

//     return arr.flat(2);
// }

// let init = myFunc([1, 2, 3], [4, 5, 6, [4, 5, 6]]);

// console.log(init);

// function sortByObject(arr) {
//     return arr.sort((a, b) => a.b - b.b);
// }

// let instance = sortByObject([
//     { a: 2, b: 10 },
//     { a: 5, b: 4 },
// ]);
// console.log(instance);

// function sortByObject(a, b) {
// let arrays = [...a, ...b];

// let total = [];

// for (let i = 0; i < arrays.length; i++) {
//     if (total.indexOf(arrays[i]) === -1) {
//         total.push(arrays[i]);
//     }
// }

// return total.sort((a, b) => a - b);
// step 2
// return [...new Set([...a, ...b])].sort((x, y) => x - y);
// }

// let instance = sortByObject([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
// console.log(instance);

// let arr1 = [-10, 22, 333, 42];
// let arr2 = [-11, 5, 22, 41, 42];

// let instance = [...new Set([...arr1, ...arr2])];
// console.log(instance);
// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// console.log(visitsCountMap.get(john));
// alert( visitsCountMap.get(john) )

// let obj = {
//     name: "John",
//     age: 30,
// };

// let map = new Map(Object.entries(obj));

// console.log(map);
// alert(map.get("name")); // John
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

// function getNArr(a, b) {
//     console.log(a.splice(a.indexOf(b), 1));
// }

// let init = getNArr([1, 2, 3, 4], 2);

// function sum(arr) {
//     return arr.reduce((a, b) => a + b, 0) / 3;
// }

// console.log(sum([10, 100, 40])); // 50

// function myFunc(a, b) {
//     let total = [...a, ...b];
//     let outer = [];

//     for (let i = 0; i < total.length; i++) {
//         if (outer.indexOf(total[i]) === -1) {
//             outer.push(total[i]);
//         }
//     }
//     return outer;
// }

// console.log(myFunc([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// function myFunc(obj, key) {
//     // step 1
//     // if (obj[key] === null) {
//     //     return false;
//     // } else if (obj[key] === undefined) {
//     //     return false;
//     // } else {
//     //     return true;
//     // }

//     // step 2
//     return Boolean(obj[key]);
// }

// console.log(myFunc({ x: "a", y: null, z: "c" }, "y"));

// const createObject = (a) => {
//     // step 1
//     // let obj = {};
//     // obj.key = a;
//     // return obj;

//     // step 2
//     return { key: a };
// };

// console.log(createObject("a"));

// const createObject = (a, b) => {
//     return { [a]: b };
// };

// console.log(createObject("a", "z"));

// const createObject = (a, b) => {
//     // step 1c
//     // let obj = {};

//     // a.forEach((key, i) => (obj[key] = b[i]));
//     // return obj;

//     // step 2
//     return a.reduce((p, n, value) => ({ ...p, [n]: b[value] }), {});
// };

// console.log(createObject(["a", "z"], [2, 3]));
// // {a: 2, z: 3}

// function getObjectValue(obj) {
//     // return Object.keys(obj);
//     // return Object.values(obj);

//     //
//     let arr = Object.values(obj);
//     return arr.reduce((a, b) => a + b, 0);
// }

// console.log(getObjectValue({ a: 1, b: 2, c: 3 }));

// function getObjectValue(obj) {
//     const { b, ...rest } = obj;
//     console.log(rest);
// }

// console.log(getObjectValue({ a: 1, b: 2, c: 3 }));

// function myFunction(x, y) {
//     // step 1
//     // for (let i in x) {
//     //     x[i] *= y;
//     // }
//     // return x;

//     // step 2
//     return Object.entries(x).reduce((acc, [key, val]) => {
//         return { ...acc, [key]: val * y };
//     }, {});
// }

// console.log(myFunction({ a: 1, b: 2 }, 3));

// const changeKeyObject = (x, y) => {
//     // step 1
//     // let obj = {};
//     // for (let i in y) {
//     //     for (let n in x) {
//     //         if (i === n) {
//     //             let change = Object.keys(y).map((key) => {
//     //                 if (n === key) {
//     //                     key = "d";
//     //                 }
//     //                 return key;
//     //             });
//     //             let yVal = Object.values(y);
//     //             for (let val = 0; val < change.length; val++) {
//     //                 obj[change[val]] = yVal[val];
//     //             }
//     //         }
//     //     }
//     // }
//     // let d = obj.d;
//     // delete obj.d;
//     // obj.d = d;
//     // let result = { ...x, ...obj };
//     // return result;

//     // step 2
//     const { b, ...rest } = y;
//     return { ...x, ...rest, d: b };
// };

// const init = changeKeyObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 });
// input: { a: 1, b: 2 }, { c: 3, b: 4, e: 5 }
// output: { a: 1, b: 2 , c: 3, e: 5, d: 4 }

// console.log(init);

// const myFunction = (a, b) => {
//     return Date.parse(a) >= Date.parse(b) ? true : false;
// };

// let currentDate = myFunction(
//     new Date("2000/01/01 08:00:00"),
//     new Date("2000/01/01 08:45:00")
// );
// console.log(currentDate);

// 1. Check the range outside
// const age = +prompt("Enter your age:", 0);

// if (age < 14 || age > 90) {
//     console.log(age);
// }

// if (!(age >= 14 && age <= 90)) {
//     console.log(age);
// }

// 2. A question about "if"
// if (-1 || 0) alert("first"); // answer = -1
// if (-1 && 0) alert("second"); //answer = 0
// if (null || (-1 && 1)) alert("third"); // answer 1

// 3. Which values get shown by the "for" loop?
// for (let i = 0; i < 5; i++) console.log(i); // 0-4

// for (let i = 0; i < 5; ++i) console.log(i); // 0-4

// 4. Output even numbers in the loop
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i, "even");
//     }
// }

// 5. Replace "for" with "while";
// let i = 0;

// while (i < 3) {
//     alert(i);
//     i++;
// }

// 6. Repeat until the input is correct
// let num = +prompt("Enter a number:", 0);

// for (let i = 0; i <= 100; i++) {
//     if (num <= 100) {
//         num = +prompt("Enter a number:", 0);
//     } else {
//         alert(`Your number is ${num}`);
//         break;
//     }
// }

// 7. Output Prime numbers
// const n = 10;

// for (let x = 2; x <= n; x++) {
//     let check = true;
//     for (let y = 2; y < x; y++) {
//         if (x % y == 0) {
//             check = false;
//             // console.log(x)
//         }
//     }
//     if (check) {
//         console.log(x);
//     }
// }

// 8. Rewrite the "switch" into an "if"

// const browser = "Edge"; // Chrome; Firefox; Safari; Opera;

// if (browser == "Edge") {
//     alert("You've got the Edge!");
// } else if (
//     browser == "Firefox" ||
//     browser == "Chrome" ||
//     browser == "Safari" ||
//     browser == "Opera"
// ) {
//     alert("Okay we support these browsers too");
// } else {
//     alert("We hope that this page looks ok!");
// }

// 9. Rewrite "if" into  "switch"
// const num = +prompt("Enter a number", 0);

// switch (num) {
//     case 0:
//         alert(num);
//         break;
//     case 1:
//         alert(num);
//         break;
//     case 2:
//     case 3:
//         alert(num);
//         break;
//     default:
//         alert(num);
//         break;
// }

// function getStr(str) {
//     let check = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     let result = "";

//     for (let i = 0; i <= str.length; i++) {
//         let char = str.charAt(i);
//         if (check.indexOf(char) == -1) {
//             result += char;
//         }
//     }

//     return result;
// }

// const instance = getStr(
//     "No offense but,\nYour writing is among the worst I've ever read"
// );

// N ffns bt,\nYr wrtng s mng th wrst 'v vr rd

// console.log(instance);

// 2 li sanoq sistemasi
// console.log(Number(5 + 9).toString(2));

// const findShortText = (s) => {
//     // step 1
//     // let arr = s.split(" ");
//     // let small = arr[0];
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i].length < small.length) {
//     //         small = arr[i];
//     //     }
//     // }
//     // return small.length;

//     // step 2
//     let smallest = Math.min(...s.split(" ").map((w) => w.length));
// };

// let instance = findShortText(
//     "bitcoin take over the world maybe who knows perhaps"
// ); // 3 who

// function fn(a, b) {
//     let obj = {};
//     let keys = Object.keys(a);

//     Object.values(a).map((e, i) => {
//         obj[keys[i]] = e * b;
//     });

//     console.log(obj);
// }

// const instance = fn({ a: 1, b: 2, c: 3 }, 3);

// console.log(instance);

1;
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if(typeof obj[key] === 'number') {
//       obj[key] * 2;
//     }
//   }
// }

2;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let total = 0;
// for(let key in salaries) {
//   total += salaries[key];
// }

// call, apply and bind

// call method
// function Car(type, fuelType) {
//     this.type = type;
//     this.fuelType = fuelType;
// }

// function setBrand(brand) {
//     Car.call(this, "convertible", "petrol");
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function definePrice(price) {
//     Car.call(this, "convertible", "diesel");
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand("Brand1");
// const newCarPrice = new definePrice(100000);

function fn(a, b) {
    for (let i in a) {
        a[i] * b;
    }
}

console.log(fn({ a: 1, b: 2, c: 3 }, 3));
