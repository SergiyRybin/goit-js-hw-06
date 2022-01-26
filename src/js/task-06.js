const input = document.querySelector("#validation-input")

input.addEventListener("blur", (event)=>{
    console.log(event.target.value.length)
   if(event.target.value.length === Number(input.dataset.length)){
       input.setAttribute("id", "#validation-input.valid")
    }else{ 
   input.setAttribute("id", "validation-input.invalid")
}
})
