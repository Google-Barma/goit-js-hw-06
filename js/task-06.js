const input = document.querySelector("#validation-input");

const changeInput = (e) => {
  console.dir(e.currentTarget.dataset.length);
  if (e.currentTarget.value.length < e.currentTarget.dataset.length) {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }

    input.classList.add("invalid");
    return;
  }

  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }
  input.classList.add("valid");
};

input.addEventListener("blur", changeInput);
