const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// 1.Все элементы галереи должны добавляться в DOM за одну операцию вставки.


const galleryElements = images.map((image) => 
 `<li class="item-gallery"><img class="item-gallery-img" src="${image.url}" alt="${image.alt}"></li>`
).join('');
 
const galleryList = document.querySelector('.gallery').insertAdjacentHTML("beforeend", galleryElements);


// const galleryList = document.querySelector('.gallery');

// const galleryElements = images.map(image => {
//     return `<li class="item-gallery"><img src="${image.url}" alt="${image.alt}"></li>`
// });

// galleryList.insertAdjacentHTML("afterend", galleryElements.join(''));


