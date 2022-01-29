function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
const input = document.querySelector("input")


const divBox = document.querySelector("#boxes")



buttonCreate.addEventListener("click", ()=> {
 input.addEventListener("blur", ()=> {
    for (let index = 0; index <= input.value; index++) {
      const addElement= document.createElement('div')
      divBox.append(addElement)
    }
  })
  
})


