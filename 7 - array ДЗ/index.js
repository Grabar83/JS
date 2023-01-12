let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let out = document.querySelector('.out');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');

let users = [];

btn.onclick = () => {
    let user = {
        name: inp1.value,
        age: inp2.value,
    }

    users.push(user)

    users.map((i) => {

        out.innerHTML = `${user.name} ${user.age}<br>`
    })
}

btn1.onclick = () => {
    out.innerHTML = "";
}