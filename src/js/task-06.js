const input = document.querySelector("#validation-input")

input.addEventListener("blur", (event)=>{
    console.log(event.target.value.length)
   if(event.currentTarget.value.length >= event.currentTarget.dataset.length){
       input.classList.add('valid')
       input.classList.remove('invalid')
    }else{ 
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
})
