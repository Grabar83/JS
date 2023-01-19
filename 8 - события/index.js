const out = document.querySelector('#root');

// -----array pets---------------
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

// ------------------------------------------------

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
out.append(wrapper);

// ----nav-------

let nav = document.createElement('nav');
nav.classList.add('wrapper__nav');
wrapper.append(nav);

// -----search-------

let inputSearch = document.createElement('input');
inputSearch.classList.add('input-search');
nav.append(inputSearch);

let inputBtn = document.createElement('button');
inputBtn.classList.add('input-btn');
nav.append(inputBtn);
inputBtn.innerHTML = 'Search';

inputBtn.onclick = () => {
    outRes.innerHTML = '' ;
    pets.filter((pet) => {
        if (pet.name == inputSearch.value) {            
            outRes.innerHTML += `
    <div class="pets__item"> 
      <h3 class="pets__name">${pet.name}</h3>
      <img class="pets__img" src="${pet.url}" alt="">
      <div class="pets__price">${pet.price}</div>
      <p class="pets__description">${pet.description}</p>
      <h5 class="pets__loc">${pet.location}</h5>
    </div>
    `;
        }
    })
}

// ---------select-----

let selectNav = document.createElement('select');
selectNav.classList.add('nav__select');
nav.append(selectNav);

let option = document.createElement('option');
selectNav.append(option);
option.innerHTML = 'Другая';

let option1 = document.createElement('option');
selectNav.append(option1);
option1.innerHTML = 'Скоттиш фолд';

let option2 = document.createElement('option');
selectNav.append(option2);
option2.innerHTML = 'Экзотическая короткошерстная';

let selectBtn = document.createElement('button');
selectBtn.classList.add('select-btn')
nav.append(selectBtn);
selectBtn.innerHTML = 'Select';

selectBtn.onclick = () => {
    outRes.innerHTML = '' ;
    pets.filter((pet) => {
        if (pet.name == selectNav.value) {            
            outRes.innerHTML += `
    <div class="pets__item"> 
      <h3 class="pets__name">${pet.name}</h3>
      <img class="pets__img" src="${pet.url}" alt="">
      <div class="pets__price">${pet.price}</div>
      <p class="pets__description">${pet.description}</p>
      <h5 class="pets__loc">${pet.location}</h5>
    </div>
    `;
        }
    })
}

// -------out resalts--------------------------

let outRes = document.createElement('div');
outRes.classList.add('nav__out-resalts');
wrapper.append(outRes);

pets.map((pet) => {
    outRes.innerHTML += `
    <div class="pets__item"> 
      <h3 class="pets__name">${pet.name}</h3>
      <img class="pets__img" src="${pet.url}" alt="">
      <div class="pets__price">${pet.price}</div>
      <p class="pets__description">${pet.description}</p>
      <h5 class="pets__loc">${pet.location}</h5>
    </div>
    `;
})


// ---------------sort prise-----------------------

let fromTop = document.createElement('button');
fromTop.classList.add('from-top');
nav.append(fromTop);
fromTop.innerHTML = 'От дорогих к дешевым'

fromTop.onclick = () => {
    outRes.innerHTML = '';
    const sorted = pets.sort((pet1, pet2) => parseInt(pet1.price) > parseInt(pet2.price) ? -1 : 1)    
    for (i = 0; i < sorted.length; i++) {
        outRes.innerHTML +=  `
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

let fromBottom = document.createElement('button');
fromBottom.classList.add('from-bottom');
nav.append(fromBottom);
fromBottom.innerHTML = 'От дешевых к дорогим'

fromBottom.onclick = () => {
    outRes.innerHTML = '';
    const sorted = pets.sort((pet1, pet2) => parseInt(pet1.price) > parseInt(pet2.price) ? 1 : -1)    
    for (i = 0; i < sorted.length; i++) {
        outRes.innerHTML +=  `
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

