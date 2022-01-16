const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(option => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent = option;

  return ingredientsList;
}
)
const item= document.querySelector('#ingredients');
item.append(...elements)
console.log(item)