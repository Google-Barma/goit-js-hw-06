"use strict";

const list = document.querySelector("ul");
console.log(`Number of categories: ${list.children.length}`);

for (let item of list.children) {
  for (let i of item.children) {
    if (i.nodeName === "H2") {
      console.log(`Category: ${i.textContent}`);
      continue;
    }

    console.log(`Elements: ${i.children.length}`);
  }
}
