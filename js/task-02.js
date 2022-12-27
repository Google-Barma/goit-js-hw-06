const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredient) => `<li class="item"><p>${ingredient}</p></li>`)
  .join("");

list.innerHTML = markup;
