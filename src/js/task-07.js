const input = document.querySelector('#font-size-control')
const spanText = document.querySelector("#text")


const change = () =>  spanText.style.fontSize = input.value+"px"
    // spanText.style.fontSize = `${input.value}px`
;

input.addEventListener("change", change);
input.addEventListener("input", change);


