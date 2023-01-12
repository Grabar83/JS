 let out = document.querySelector('.out');
 let out2 = document.querySelector('.out2');
 let name = document.querySelector('.inp1');
 let age = document.querySelector('.inp2');
 let inp3 = document.querySelector('.inp3');
 let inp4 = document.querySelector('.inp4');
 let btn = document.querySelector('.btn');
 let btn1 = document.querySelector('.btn1');
 let btn2 = document.querySelector('.btn2');
 let adult = document.querySelector('.adult')
 let span = document.querySelector('.old')

 const users = [];

 btn.onclick = () => {
    let obj = {
       login: name.value,
       password: age.value,
    }
    users.push(obj)
    if (adult.checked) {
       span.innerHTML = `<span style = "color: red">Мне 18</span>`;
       if (name.value && age.value) {
          users.push(obj)
          name.value = ''
          age.value = ''
          document.querySelector('.out2').innerHTML = `<h2 style = "color: green; font-style: italic; font-weight: bold">Вы зарегестрированы!!!</h2>`
       } else {
          document.querySelector('.out2').innerHTML = `<h2 style = "color: red; font-style: italic; font-weight: bold">Заполните все поля</h2>`
       }      
    }
 }

 btn1.onclick = () => {
   document.querySelector('.out1').innerHTML += `${i.name}`;
 }

 const {login, password} = users;
 console.log(users.login);

 btn2.onclick = () => {
   users.map ((i) => {      
      if (i.login == inp3.value && i.password == inp4.value){
         out2.innerHTML = 'Wellcome!';         
      } else {
         out2.innerHTML = 'Error'

      }
    }
   )
 }