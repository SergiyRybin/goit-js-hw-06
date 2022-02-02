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
    addElement.style.width= index*30+"px";
    addElement.style.height= index*30+"px";
    addElement.style.margin = "10px"
divBox.style.display = "flex";
divBox.style.alignItems = "center";
divBox.style.flexWrap = "wrap"
console.log(divBox.style)

    addElement.style.border= "2px solid black"
    divBox.append(addElement)
  }
 
})

buttonDestroy.addEventListener("click", ()=>{
input.value=""
divBox.remove()
})
