const addName = document.querySelector("#name-input")
addName.addEventListener("input", onSpan)
const spanName = document.querySelector("#name-output")

function onSpan(event){
   spanName.textContent=event.target.value
}