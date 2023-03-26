// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = [...ingredients].map(element => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = element;
  return liElement;
});
const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...ul);
console.log(ulIngredients);


