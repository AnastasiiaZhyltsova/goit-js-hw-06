// 1.Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.
const categories = document.querySelector('ul#categories');
console.log(`Number of categories: ${categories.children.length}`);

const categoriesNum = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesNum.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет
//  и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

categoriesNum.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length} `);
});
