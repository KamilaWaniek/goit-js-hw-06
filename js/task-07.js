//Pobieram dane z DOM
const fontSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

//Zmieniam styl inline na właściwość font=size
fontSize.addEventListener("input", () => {
  const changeSize = fontSize.value + "px";
  textSpan.style.fontSize = changeSize;
});
