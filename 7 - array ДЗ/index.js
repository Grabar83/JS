catSerch = document.querySelector('.cat-serch');
catSelect = document.querySelector('.cat-select');
fromBottom = document.querySelector('.fromBottom');
btnselect = document.querySelector('.btn-select');
fromBottom = document.querySelector('.fromBottom');
fromTop = document.querySelector('.fromTop');


const pets = [{
        name: "Скоттиш фолд", // Порода
        description: 'Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого',
        location: "Київ, Київська область",
        price: '4500 грн',
        url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp'
    },
    {
        name: "Скоттиш фолд", // Порода
        description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
        location: "Київ, Київська область",
        price: '1500 грн',
        url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp'
    },
    {
        name: "Другая", // Порода
        description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
        location: "Київ, Київська область",
        price: '1 грн',
        url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp'
    },
    {
        name: "Экзотическая короткошерстная", // Порода
        description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
        location: "Київ, Київська область",
        price: '5000 грн',
        url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp'
    },
    {
        name: "Экзотическая короткошерстная", // Порода
        description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
        location: "Київ, Київська область",
        price: '1300 грн',
        url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp'
    },


]

/* <div class="pets__item"> 
      <h3 class="pets__name">${pet.name}</h3>
      <img class="pets__img" src="${pet.url}" alt="">
      <div class="pets__price">${pet.price}</div>
      <p class="pets__description">${pet.description}</p>
      <h5 class="pets__loc">${pet.location}</h5>
    </div> */




const out = document.querySelector('.pets__container')

//  pets.map()
// 1-Item, 2-index, 3-array 
pets.map((pet) => {
    out.innerHTML += `
    <div class="pets__item"> 
      <h3 class="pets__name">${pet.name}</h3>
      <img class="pets__img" src="${pet.url}" alt="">
      <div class="pets__price">${pet.price}</div>
      <p class="pets__description">${pet.description}</p>
      <h5 class="pets__loc">${pet.location}</h5>
    </div>
    `
})


// let selRes = pets.filter((pet) => {
    
//     return pet.name !== catSelect.value
// })
// console.log(selRes);

let resSearch = document.querySelector('.res-search');
document.querySelector('.btn-serch').onclick = () => {
    resSearch.innerHTML = '';
    let res = pets.filter((pet) => {
        return pet.name == catSerch.value
    })
    for (i = 0; i < res.length;i++) {
        // console.log(res[i].name);
        resSearch.innerHTML +=  `
        <div class="pets__item"> 
          <h3 class="pets__name">${res[i].name}</h3>
          <img class="pets__img" src="${res[i].url}" alt="">
          <div class="pets__price">${res[i].price}</div>
          <p class="pets__description">${res[i].description}</p>
          <h5 class="pets__loc">${res[i].location}</h5>
        </div>
       `
    }    
}

btnselect.onclick = () => {
    out.innerHTML = '';
    let res = pets.filter((pet) => {
        return pet.name == catSelect.value
    })
    for (i = 0; i < res.length;i++) {
        // console.log(res[i].name);
        out.innerHTML +=  `
        <div class="pets__item"> 
          <h3 class="pets__name">${res[i].name}</h3>
          <img class="pets__img" src="${res[i].url}" alt="">
          <div class="pets__price">${res[i].price}</div>
          <p class="pets__description">${res[i].description}</p>
          <h5 class="pets__loc">${res[i].location}</h5>
        </div>
       `
    }    
}

function getItem () {
    const addValue = [];
    for ( let option of document.querySelector('.cat-select').option){
        addValue.push(option.value);
        console.log(addValue[0]);
    }
}

getItem()



fromBottom.onclick = () => {
    out.innerHTML = '';
    const sorted = pets.sort((pet1, pet2) => parseInt(pet1.price) > parseInt(pet2.price) ? 1 : -1)
    console.log(sorted);
    for (i = 0; i < sorted.length; i++) {
        out.innerHTML +=  `
        <div class="pets__item"> 
          <h3 class="pets__name">${sorted[i].name}</h3>
          <img class="pets__img" src="${sorted[i].url}" alt="">
          <div class="pets__price">${sorted[i].price}</div>
          <p class="pets__description">${sorted[i].description}</p>
          <h5 class="pets__loc">${sorted[i].location}</h5>
        </div>
       `
    }
}

fromTop.onclick = () => {
    out.innerHTML = '';
    const sorted = pets.sort((pet1, pet2) => parseInt(pet1.price) > parseInt(pet2.price) ? -1 : 1)    
    for (i = 0; i < sorted.length; i++) {
        out.innerHTML +=  `
        <div class="pets__item"> 
          <h3 class="pets__name">${sorted[i].name}</h3>
          <img class="pets__img" src="${sorted[i].url}" alt="">
          <div class="pets__price">${sorted[i].price}</div>
          <p class="pets__description">${sorted[i].description}</p>
          <h5 class="pets__loc">${sorted[i].location}</h5>
        </div>
       `
    }
}



// fromBottom.onclick = () => {
//     let sortcat = pets.sort();
//     for (i = 0; i < sortcat.length; i++) {

//     }

// }

let a = '555 гр';
let b = parseInt(a)




// pets.sort();
//     out.innerHTML += `
// <div class="pets__item"> 
//   <h3 class="pets__name">${pet.name}</h3>
//   <img class="pets__img" src="${pet.url}" alt="">
//   <div class="pets__price">${pet.price}</div>
//   <p class="pets__description">${pet.description}</p>
//   <h5 class="pets__loc">${pet.location}</h5>
// </div>
// `    
// }