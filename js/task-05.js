//Pobieram dane z DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//Dodaję event listener'a dla input
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
