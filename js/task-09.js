function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Wchodzę do body do klasy z wartością change-color
const changeColor = document.querySelector(".change-color");

//Wchodzę do div do klasy z wartością widget
const changeWidget = document.querySelector(".widget");

//Wchodzę do span do klasy z wartością color
const changeSpan = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  changeSpan.textContent = randomColor;
});
