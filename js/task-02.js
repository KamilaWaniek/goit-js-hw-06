document.body.onload = addElement;

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngredient = ingredient.createElement("li");
const newContent = ingredient.createTextNode("salt");
newIngredient.appendChild(newContent);

const currentLi = document.getElementById("li1");
document.body.insertBefore(newIngredient, currentLi);

//Napisz skrypt, który dla każdego elementu tablicy ingredients:

//Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
//Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
//Doda do elementu klasę item.
//Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
