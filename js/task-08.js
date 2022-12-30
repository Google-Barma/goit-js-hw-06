const formEl = document.querySelector(".login-form");
const data = {};

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, property) => {
    if (!value) {
      alert(`You need fill in field ${property}`);
      return;
    }

    data[property] = value;
  });

  console.log(data);

  formEl.reset();
}
