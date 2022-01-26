const AllCategories = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${AllCategories.length} ` )


// const animals = AllCategories[0]
// const animalLength = animals.querySelectorAll('li')
// console.log(`Category: ${animals.firstElementChild.textContent}`)
// console.log(`Elements: ${animalLength.length}`)


// const products = AllCategories[1]
// const productsLength = products.querySelectorAll('li')
// console.log(`Category: ${products.firstElementChild.textContent}`)
// console.log(`Elements: ${productsLength.length}`)

// const technologies = AllCategories[2]
// const technologiesLength = technologies.querySelectorAll('li')
// console.log(`Category: ${technologies.firstElementChild.textContent}`)
// console.log(`Elements: ${technologiesLength.length}`)

AllCategories.forEach( function(categori){
    console.log(`Category: ${categori.firstElementChild.textContent}`)
console.log(`Elements: ${categori.lastElementChild.children.length}`)

})

