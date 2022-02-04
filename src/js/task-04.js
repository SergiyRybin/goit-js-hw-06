
const buttonAction = document.querySelectorAll('#counter  button');
const value = document.querySelector("#value")
let counterValue = 0;


buttonAction.forEach(element => {
    element.addEventListener("click", (event)=>{
        if(event.target.dataset.action === "decrement"){
      counterValue -=1}
        else{counterValue +=1}
        value.textContent = counterValue
    });
});
