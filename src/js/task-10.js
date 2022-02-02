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
    const value = 20
    addElement.style.width= value+10*index+"px";
    addElement.style.height= value+10*index+"px";
    addElement.style.margin = "10px"
    console.log(input.valueAsNumber[1])
divBox.style.display = "flex";
divBox.style.alignItems = "center";
divBox.style.flexWrap = "wrap"

    addElement.style.border= "2px solid black"
    divBox.append(addElement)
  }
 
})

buttonDestroy.addEventListener("click", ()=>{
input.value=""
divBox.remove()
})
