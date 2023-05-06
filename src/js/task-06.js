const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const requiredLength = validationInput.dataset.length;

  if (inputLength === parseInt(requiredLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
