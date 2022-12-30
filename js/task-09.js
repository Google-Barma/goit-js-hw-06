const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBackgroundColor = (color) => (bodyEl.style.backgroundColor = color);

const changeColorText = (color) => (colorSpanEl.textContent = color);

const onPushBtn = () => {
  const color = getRandomHexColor();

  changeBackgroundColor(color);
  changeColorText(color);
};

btnEl.addEventListener("click", onPushBtn);
