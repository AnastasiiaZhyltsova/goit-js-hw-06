const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1.Создаст отдельный элемент <li>. 
// Обзательно используй метод document.createElement().
const list = document.querySelector('ul#ingredients');
    const elements = ingredients.map(ingredient => {
    const elementLi = document.createElement('li');
// 2.Добавит название ингредиента как его текстовое содержимое.
        elementLi.textContent = ingredient;
// 3. Добавит элементу класс item. 
        elementLi.classList.add('item');
        return elementLi;
    })
list.append(...elements);


console.log(...elements);



