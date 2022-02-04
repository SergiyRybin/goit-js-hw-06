const addName = document.querySelector("#name-input")
addName.addEventListener("input", onSpan)
const spanName = document.querySelector("#name-output")

function onSpan(event){
   if(addName.value.length === 0){
      spanName.textContent="Anonymous"
   }
   else{
      spanName.textContent=event.target.value
   }
}

