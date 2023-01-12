// function calcSum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;
//   if (numSum > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMoreMasage() {
//   console.log('Больше');
// }

// function showLessMasage() {
//   console.log('Меньше');
// }

// calcSum(3, 0, showMoreMasage, showLessMasage)

// // ---------------------------------

// function calccSum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;
//   return numSum;
// }

// function showRes() {
//   console.log(calccSum(2, 2));
// }

// showRes()

// // --------------------------------------------

// function getSum(numOne, numTwo) {
//   let numSum = calccSum(numOne, numTwo);
//   console.log(numSum);
// }

// function calccSum(numOne, numTwo) {
//   return numOne + numTwo;
// };
// getSum(5, 5)

let name = document.querySelector('.name');
let age = document.querySelector('.age');
let tel = document.querySelector('.tel');
let btn = document.querySelector('button');
let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');


function userAdd(out, name, age, tel) {
  if (name == '' || age == '' || tel == '') {
    out2.innerHTML = 'незаполненное поле';
    return;
  } else if (isNaN (age) || isNaN (tel)) {
    out2.innerHTML = 'нечисловое значение поля ввода';
    return;
  }
  out.innerHTML += `
   <li>
     <span> Name: ${name}</span>
     <span> Age: ${age}</span>
     <a href="tel:${tel}">${tel}</a>
   </li>  
   `
   out2 = '', name.value = '', age.value = '', tel.value = '';
}

btn.onclick = () => {
  
  userAdd(out2, name.value, age.value, tel.value)
}
// document.querySelector('.btn2').onclick = () => {
//   userAdd(out2, name.value, age.value, tel.value)
// }