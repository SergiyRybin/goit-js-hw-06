const input = document.querySelector("#validation-input")
console.log((input))
input.addEventListener("blur", (event)=>{
   if(event.currentTarget.value.length >= event.currentTarget.dataset.length){
       input.classList.add('valid')
       input.classList.remove('invalid')
    }else{ 
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
})
