const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const changeInput = (e) => {
  if (e.currentTarget.value.length === 0) {
    span.textContent = "Anonymous";
    return;
  }

  span.textContent = e.currentTarget.value;
};

input.addEventListener("input", changeInput);
