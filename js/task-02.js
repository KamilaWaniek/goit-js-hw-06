const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.querySelector("#ingredients");

//Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().

ingredients.forEach((ingredient) => {
  const newIngredient = document.createElement("li");

  //Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
  newIngredient.textContent = ingredient;

  //Doda do elementu klasę item.
  newIngredient.classList.add("item");

  //Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
  ulElements.append(newIngredient);
});
console.log(ulElements);
