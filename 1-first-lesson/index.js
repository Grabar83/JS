"use strict";

// let num1 = document.querySelector('.num1');
// console.log(num1)
// let num2 = document.querySelector('.num2');
// let res = document.querySelector('.res');
// let button = document.querySelector('button');

// button.onclick = () =>{
//     res.innerHTML = +num1.value + +num2.value;
// }


let name1 = document.querySelector('.name');
let nameView = document.querySelector('.nameView');
console.log(typeof name1)
nameView = onclick = () => {
    console.log(`Привет ${name1.value}`);
}


const currentYear = 2022;
let birthYear = document.querySelector('.year');
let age = document.querySelector('.age');
let ageview = document.querySelector('.ageview');
ageview = onclick = () => {
    age.innerHTML = currentYear - birthYear.value;
}
// console.log(ageview)

// let usd = document.querySelector('.usd');
// let hrn = document.querySelector('.hrn');
// let conv = document.querySelector('.conv');
// let resal = document.querySelector('.res');
// conv = onclick = () => {
//     resal.innerHTML = hrn / usd;
// }


// console.log(res);

