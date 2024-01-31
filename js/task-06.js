//Pobieram dane z DOM
const validationInput = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length="6"]');

validationInput.addEventListener("blur", () => {
  const valueLength = validationInput.value.length;
  validationInput.classList.toggle("valid", valueLength === 6);
  validationInput.classList.toggle("invalid", valueLength !== 6);
});
