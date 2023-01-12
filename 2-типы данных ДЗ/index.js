let a1 = 0.1;
let a2 = 0.2;
let res1_1 = document.querySelector('.res1-1').innerHTML = a1 + a2;

let b1 = +'1';
let b2 = 2;
document.querySelector('.res1-2').innerHTML = b1 + b2;

const file = 850;
let vol = document.querySelector('.vol');
let fileButton = document.querySelector('.fileButton');
let amount = document.querySelector('.amount');
let rem = document.querySelector('.rem')
fileButton.onclick = () => {
    amount.innerHTML = Math.floor(vol.value / file);
    rem.innerHTML = vol.value % file;
}

// -----------------------------------------------------

const file1 = 10.5;
let hrn = document.querySelector('.hrn');

let fileButton1 = document.querySelector('.fileButton1');
let choco = document.querySelector('.choco');
let rem1 = document.querySelector('.rem1')
fileButton1.onclick = () => {
    choco.innerHTML = Math.floor(hrn.value / file1);
    rem1.innerHTML = hrn.value % file1;
}

// -------------------------------------------------------

const per = 1.05;
let sum = document.querySelector('.sum');
let month = document.querySelector('.month');
let checkMoney = document.querySelector('.checkMoney');
let sumPer = document.querySelector('.sumPer');
checkMoney.onclick = () => {
    sumPer.innerHTML = ((sum.value * per) * month.value) - sum.value*month.value;
}


console.log(2 && 0 && 1);
console.log(2 || 0 || 1);
console.log(2 && 0 || 1);