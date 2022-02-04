const input = document.querySelector('#font-size-control')
const spanText = document.querySelector("#text")
spanText.style.fontSize = input.value+"px"
const change = () =>  spanText.style.fontSize = input.value+"px"
;

input.addEventListener("change", change);
input.addEventListener("input", change);


