const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;
  counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterValueSpan.textContent = counterValue;
});
