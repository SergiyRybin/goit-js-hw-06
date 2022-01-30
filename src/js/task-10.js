function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
const input = document.querySelector("input")


const divBox = document.querySelector("#boxes")



buttonCreate.addEventListener("click", ()=> {
  
  for (let index = 1; index <= input.valueAsNumber; index++) {
    const addElement= document.createElement('div')

   const width = addElement.style.width= "30px";
   const heigth = addElement.style.height= "30px";
    addElement.style.border= "1px solid black"
   
    divBox.append(addElement)
  }
})


