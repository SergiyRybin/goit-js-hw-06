
const buttonAction = document.querySelectorAll('#counter  button')
const value = document.querySelector("#value")


// buttonAction[0].addEventListener("click", ()=> {
//     value.innerHTML--
// })
// buttonAction[1].addEventListener("click", ()=> {
//     value.innerHTML++
// })

buttonAction.forEach(element => {
    element.addEventListener("click", (event)=>{
        if(event.target.dataset.action === "decrement"){
            value.innerHTML --
        }
        else{value.innerHTML ++ }
    });
});
