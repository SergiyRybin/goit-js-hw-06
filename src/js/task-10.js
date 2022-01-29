function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
const divBox = document.querySelector("#boxes")
const addBox = document.createElement('div')

buttonDestroy.addEventListener("click", ()=> {
  console.log(buttonDestroy.textContent)
  addBox.remove()
})

buttonCreate.addEventListener("click", ()=> {
  console.log(buttonCreate.textContent)
  const addBox = document.createElement('div')

divBox.append(addBox)
})

