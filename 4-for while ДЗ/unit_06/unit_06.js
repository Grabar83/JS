//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let out1 = document.querySelector('.out-1');

let c = '';

function t1() {
    let a = '';
    let b = '';
    for (let i = 0; i < 3; i++) {
        a = '***';
        console.log(a);
        for (let j = 0; j < 1; j++) {
            b = '_';
            out1.innerHTML += `${a}${b}`
        }
    }

}



document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>

let out2 = document.querySelector('.out-2');

function t2() {
    let a = '';
    let b = '';
    for (let i = 0; i < 3; i++) {
        a = `${i+1}`;
        out2.innerHTML += a + '<br>';
        console.log(a);
        b = '';
        for (let j = 0; j < 3; j++) {
            b = '*_';
            out2.innerHTML += b
        }
        out2.innerHTML += '<br>'
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
out3 = document.querySelector('.out-3')

function t3() {
    let a = '';
    for (let i = 0; i < 4; i++) {
        a = '';
        for (let j = 0; j < 3; j++) {
            a += '*_';
        }
        out3.innerHTML += `${a}<br>`;
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
let out4 = document.querySelector('.out-4');

function t4() {
    let a = '';
    let b = '';
    for (let i = 1; i < 4; i++) {
        a = `${i}_`;
        console.log(out4);
        b = '';
        for (let j = 0; j < 5; j++) {
            b += `${j+1}*`;
        }
        out4.innerHTML += a + b;
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
let out5 = document.querySelector('.out-5');

function t5() {
    let a = '';
    let b = '';
    for (let i = 0; i < 3; i++) {
        b = '';
        for (let j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                a = 1
            } else {
                a = 0
            }
            out5.innerHTML += a
        }
        out5.innerHTML += '<br>'
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x
let out6 = document.querySelector('.out-6');


function t6() {
    let a = '';
    let b = '';
    for (let i = 0; i < 3; i++) {
        b = '';
        for (let j = 0; j < 2; j++) {
            if (j % 2 == 0) {
                a = 10 + 'x'
            } else {
                a = '01' + 'x'
            }
            out6.innerHTML += a
        }
        out6.innerHTML += '<br>'
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****
let out7 = document.querySelector('.out-7');

function t7() {
    let a = '';
    let b = '';
    for (let i = 0; i < 4; i++) {
        b = `${i+1}`

        for (let j = 0; j < b; j = b) {

            a += '*';
            console.log(a);
            out7.innerHTML += a
        }
        out7.innerHTML += '<br>'
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *
let out8 = document.querySelector('.out-8');

function t8() {
    let a = '';
    let b = '';
    for (let i = 5; i > 0; i--) {
        a = '';
        for (let j = i; j > 0; j--) {
            a = '*';
            console.log(a);
            out8.innerHTML += a
        }
        out8.innerHTML += '<br>'
    }
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_
let out9 = document.querySelector('.out-9');

function t9() {
    let a = '';
    let b = '';
    for (let i = 0; i < 5; i++) {
        a = `${i+1}`;
        // console.log(a);
        for (let j = 0; j < a; j++) {
            b = `${j+1}_`;
            out9.innerHTML += b;
            console.log(out9);
        }
        out9.innerHTML += '<br>'
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

let out10 = document.querySelector('.out-10');

function t10() {
    let a = '';
    let b = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j < 10; j++) {
            a = `${i}${j}_`;
            out10.innerHTML += a;
        }
        out10.innerHTML += `${i+1}0_<br>`;
    }
}

document.querySelector('.b-10').onclick = t10;