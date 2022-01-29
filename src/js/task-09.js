function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector(".color")
const buttonChange = document.querySelector(".change-color")
buttonChange.addEventListener("click", () => {
  const currentCollor = getRandomHexColor()
  document.body.style.backgroundColor = currentCollor
  spanColor.textContent = currentCollor
}) ;


 



