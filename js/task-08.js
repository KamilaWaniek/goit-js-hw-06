//Pobieram dane z DOM
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  //Jeśli pole email i password są puste, zwraca specjalny alert
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields should be fill in");
  } else {
    const dataForm = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    consoleLog(dataForm);

    //Wymazuję wprowadzoną treść w polach poprzez reset
    loginForm.reset();
  }
});
