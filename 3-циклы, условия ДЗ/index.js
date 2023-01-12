let sel = document.querySelector('.sel');
let game = document.querySelector('.game');
let my = document.querySelector('.my');
let comp = document.querySelector('.comp');
let res = document.querySelector('.res')
let numb


game.onclick = () => {
    my.innerHTML = sel.value;

    function choose(max) {
        return Math.floor(Math.random() * max);
    }
    numb = choose(3);
    switch (numb) {
        case 0:
            comp.innerHTML = 'Камень';
            if (sel.value = 'Камень') {
                res.innerHTML = 'Ничья';
            } else if (sel.value = 'Ножницы') {
                res.innerHTML = 'Проиграл';
            } else if (sel.value = 'Бумага') {
                res.innerHTML = 'Победа';
            }
            break;
        case 1:
            comp.innerHTML = 'Ножницы';
            if (sel.value = 'Камень') {
                res.innerHTML = 'Победа';
            } else if (sel.value = 'Ножницы') {
                res.innerHTML = 'Ничья';
            } else if (sel.value = 'Бумага') {
                res.innerHTML = 'Проиграл';
            }
            break;
        case 2:
            comp.innerHTML = 'Бумага';
            if (sel.value = 'Камень') {
                res.innerHTML = 'Проиграл';
            } else if (sel.value = 'Ножницы') {
                res.innerHTML = 'Победа';
            } else if (sel.value = 'Бумага') {
                res.innerHTML = 'Ничья';
            }
            break;
    }
}