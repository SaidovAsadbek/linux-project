"use strict";
let text = document.querySelector("p");

// alert(text);
// let obj = { fist: 1 };

// let newObj = structuredClone(obj);
// newObj.fist = 0;

// console.log(newObj);
// console.log(obj);

// Function Constructor
// function Fn() {
//     console.log(this);
// }

// let user = new Fn("John", 20);
// console.log(user);

// Fn.bind(text)();
// const fn = () => {
//     // this = ?;
// };
// fn.call({});

// event bubbling
for (let elem of document.querySelectorAll("*")) {
    elem.addEventListener("click", (e) => alert(`Capturing: ${elem.tagName}`), {
        capture: true,
    });
    // elem.addEventListener("click", (e) => alert(`Bubbling: ${elem.tagName}`));
}

// event capturing
