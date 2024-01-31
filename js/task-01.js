const categoryNumber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryNumber.length}\n`);

categoryNumber.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCounter = category.querySelectorAll("ul li").length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCounter}`);
});
