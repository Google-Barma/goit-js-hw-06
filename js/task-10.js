const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

const createBoxes = (amount) => {
  const boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    boxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        !i ? width : (width += 10)
      }px; height: ${
        !i ? height : (height += 10)
      }px;display: flex; justify-content: center; align-items: center">${
        i + 1
      }</div>`
    );
  }

  console.log(boxes.join(""));

  refs.boxes.innerHTML = boxes.join("");
};

const onPushCreateBtn = () => {
  const amount = refs.input.value;

  createBoxes(amount);
};

refs.createBtn.addEventListener("click", onPushCreateBtn);
refs.destroyBtn.addEventListener("click", destroyBoxes);
