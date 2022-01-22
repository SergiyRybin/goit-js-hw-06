const input = document.querySelector("#validation-input")
console.log(Number(input.dataset.length))
input.addEventListener("blur", (event)=>{
    console.log(event.target.value.length)
   if(event.target.value.length === Number(input.dataset.length)){
       console.log("ok")
   }else{ console.log("lost")}
})
