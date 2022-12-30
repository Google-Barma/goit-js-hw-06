const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let width = 30;
let height = 30;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";

  width = 30;
  height = 30;
};

const createBoxes = (amount) => {
  const boxes = [];

  // for (let i = 0; i < amount; i++) {
  //   boxes.push(
  //     `<div style="background-color: ${getRandomHexColor()}; width: ${
  //       !i ? width : (width += 10)
  //     }px; height: ${
  //       !i ? height : (height += 10)
  //     }px;display: flex; justify-content: center; align-items: center">${
  //       i + 1
  //     }</div>`
  //   );
  // }

  // refs.boxes.innerHTML = boxes.join("");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${!i ? width : (width += 10)}px`;
    box.style.height = `${!i ? height : (height += 10)}px`;

    boxes.push(box);
  }

  refs.boxes.append(...boxes);
};

const onPushCreateBtn = () => {
  const amount = refs.input.value;

  createBoxes(amount);
};

refs.createBtn.addEventListener("click", onPushCreateBtn);
refs.destroyBtn.addEventListener("click", destroyBoxes);
