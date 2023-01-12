let btn1 = document.querySelector('.btn1');

function age() {
  let inp1 = document.querySelector('.inp1').value;
  let out1 = document.querySelector('.out1');
  if (inp1 >= 0 && inp1 <= 10) {
    out1.innerHTML = 'дитина';
  } else if (inp1 >= 11 && inp1 <= 17) {
    out1.innerHTML = 'підліток';
  } else if (inp1 >= 18 && inp1 <= 59) {
    out1.innerHTML = 'дорослий';
  } else if (inp1 >= 60) {
    out1.innerHTML = 'пенсіонер';
  } else {
    out1.innerHTML = 'невірно введені дані';
  }
}

btn1.onclick = (age);

// ----------------------------

let btn2 = document.querySelector('.btn2');

function sym() {
  let inp = document.querySelector('.inp2').value;
  let out2 = document.querySelector('.out2');
  switch (inp) {
    case '0':
      out2.innerHTML = '!1'
      break;
    case '1':
      out2.innerHTML = '!1'
      break;
    case '2':
      out2.innerHTML = '@2'
      break;
    case '3':
      out2.innerHTML = '#3'
      break;
    case '4':
      out2.innerHTML = '4$'
      break;
    case '5':
      out2.innerHTML = '%5'
      break;
    case '6':
      out2.innerHTML = '^6'
      break;
    case '7':
      out2.innerHTML = '&7'
      break;
    case '8':
      out2.innerHTML = '*8'
      break;
    case '1':
      out2.innerHTML = '(9'
      break;
  }
}

btn2.onclick = (sym);

// --------------------------------

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
let btn3 = document.querySelector('.btn3');
let out3 = document.querySelector('.out3');

function sum() {
  let inp31 = +document.querySelector('.inp31').value;
  console.log(inp31);
  let inp32 = +document.querySelector('.inp32').value;
  console.log(inp32);
  while (inp31 <= inp32) {
    inp31 = inp31 + (inp31 + inp31++)
  }
  out3.innerHTML += inp31;
}
btn3.onclick = (sum);

// ----------------------------------------


let btn4 = document.querySelector('.btn4');
console.log(btn4);
let out4 = document.querySelector('.out4');
console.log(out4);
// let per = inp4 / 100;
function pay() {
  let inp4 = +document.querySelector('.inp4').value;
  if (inp4 >= 200 && inp4 < 300) {
    out4.innerHTML = inp4 - inp4 / 100 * 3;
  } else if (inp4 >= 300 && inp4 < 500) {
    out4.innerHTML = inp4 - inp4 / 100 * 5;
  } else if (inp4 >= 500) {
    out4.innerHTML = inp4 - inp4 / 100 * 7;
  }
}
btn4.onclick = (pay);

// --------------------------

let users = ['Artem', 'Katya', 'Arisha', 'Egorka', 'Agusha'];

for (let i = 0; i <= users.length; i++) {
  console.log(users[3]);
}

for (i = 1; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i*j}`);
  }
}

// -------------------------------------


let Sasha = 'Sasha';
let out10 = document.querySelector('.out10');
let inp10 = document.querySelector('.inp10');

let btn10 = document.querySelector('.btn10');


function name1() {
  for (let i = 1; i <= inp10.value; i++) {
    out10.innerHTML += `${Sasha} <br>`;
  }
}

btn10.onclick = (name1)

// ----------------------------
let sel10 = document.querySelector('.sel10');
let inp20 = document.querySelector('.inp20');
let clear = document.querySelector('.clear');
let out20 = document.querySelector('.out20');

if (+inp20.value < 0) {
  document.querySelector('.out20').innerHTML = `<h2>Перевірте введені дані!</h2>`;
}    

sel10.onchange = () => {  
  for (let i = 0; i < inp20.value; i++) {    
    document.querySelector('.out20').innerHTML += `<li> ${sel10.value} </li>`    
  }
}
clear.onclick = () => {
  inp20.value = '';
  out20.innerHTML = '';
}