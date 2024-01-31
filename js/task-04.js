//Wartość zmiennej na początku
let counterValue = 0;

//decrement
const decrementButtonAction = document.querySelector(
  '[data-action="decrement"]'
);

//Zmienna, dzięki której wchodzę do właściwości i wartości button poprzez []
const incrementButtonAction = document.querySelector(
  '[data-action="increment"]'
);

//Zmienna, dzięki której wchodzę do span
const valueSpan = document.querySelector("#value");

//Zmniejszam wartość licznika
decrementButtonAction.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

//Zwiększam wartość licznika
incrementButtonAction.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
