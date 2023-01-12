// const hour = prompt('Enter corrent hour');
// if (hour > 6 && hour < 12) {
//     alert('Good morning');
// } else if (hour > 12 && hour < 18) {
//     alert('Good afternoon');
// } else {
//     alert('Good evening')
// }

// const color = prompt('Chose color', '');

// switch (color) {
//     case 'red':
//         console.log('The color is set to red');
//         break;
//     case 'blue':
//         console.log('The color is set to blue');
//         break;
//     case 'green':
//         console.log('The color is set to green');
//         break;
//     case 'broun':
//         console.log('The color is set to broun');
//         break;
//     default:
//         alert('The color is njt recognized');
// }




// let age = prompt ('Сколько тебе лет?' , '')
// if (age < 3) {
//     message = 'Привіт, крихітко!';
//   } else if (age < 18) {
//     message = 'Вітаю!';
//   } else if (age < 100) {
//     message = 'Моє шанування!';
//   } else {
//     message = 'Який незвичайний вік!';
//   }



// let message = 'Привет';
// let messegeend = (2 > '11') ? ' Вася' : ' Оля';
// message += messegeend
// console.log(message);

// let num = 0;
// do {    
//   console.log(num);
//   num++
// }
// while (num < 0);

let age = document.querySelector('.age');
let btn = document.querySelector('.btn');
btn.onclick = () => {
  if (age.value > 18 && age.value < 25) {
    document.querySelector('.out').innerHTML = 'Годен к призыву';
  } else if (age.value > 25 && age.value < 55) {
    document.querySelector('.out').innerHTML = 'Годен к контракту';
  } else if (age.value > 55) {
    document.querySelector('.out').innerHTML = 'Не годен';
  }
}

let res = document.querySelector('.res');
res.onclick = () => {
  age.value = '';
}

let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let btn1 = document.querySelector('.btn1')
let sel = document.querySelector('.sel');

let out1 = document.querySelector('.out1');
btn1.onclick = () => {
  switch (sel.value) {
    case '+':
      document.querySelector('.out1').innerHTML = +inp1.value + +inp2.value;
    case '-':
      document.querySelector('.out1').innerHTML = +inp1.value - +inp2.value;
    case '*':
      document.querySelector('.out1').innerHTML = +inp1.value * +inp2.value;
    case '/':
      document.querySelector('.out1').innerHTML = +inp1.value / +inp2.value;
  }
console.log(out1);
}

let res1 = document.querySelector('.res1');
res1.onclick = () => {
  inp1.value = '';
  inp2.value = '';
}