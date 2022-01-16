const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = document.createElement('ul')
item.classList.add('ingredients')

const elements = ingredients.map(
option => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent= option

  return ingredientsList
}

)
item.append(...elements)
console.log(item)