const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${rangeInput.value}px`;

const changeInputRange = (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`;
};

rangeInput.addEventListener("input", changeInputRange);
