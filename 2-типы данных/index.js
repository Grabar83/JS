let inp = document.querySelector('.inp');
// console.log(inp)
let plas = document.querySelector('.plas');

let min = document.querySelector('.min');
let out = document.querySelector('.out');
console.log(out)


plas.onclick = () => {
    if (inp.value < 10) {
        out.innerHTML = ++inp.value;
    }
}

min.onclick = () => {
    if (inp.value > -1) {
        out.innerHTML = --inp.value;
    }
}

inp2 = document.querySelector('.inp2')
res = document.querySelector('.res')
// console.log(res);
if (inp2.value || 10) {
    res.innerHTML = 'good';
} else {
    res.innerHTML = 'no-good';
}