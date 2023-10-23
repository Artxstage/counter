import { reset } from "./reset";
import { calculateResult } from "./calculateResult";

const age = document.querySelector("#age"), genderMale = document.querySelector("#gender-male"),
    weight = document.querySelector("#weight"), height = document.querySelector("#height"),
    active = document.querySelector(".radios-group"), activity = document.querySelector("#activity-minimal"),
    resultButton = document.querySelector(".form__submit-button"),
    resetButton = document.querySelector(".form__reset-button"),
    resultsBlock = document.querySelector(".counter__result");
let rate = 1.2;

age.addEventListener("input", () => {
  reset();
});

weight.addEventListener("input", () => {
  reset();
});

height.addEventListener("input", () => {
  reset();
});

active.addEventListener("change", (evt) => {
  if (evt.target.id === "activity-minimal") {
    rate = 1.2;
  } else if (evt.target.id === "activity-low") {
    rate = 1.375;
  } else if (evt.target.id === "activity-medium") {
    rate = 1.55;
  } else if (evt.target.id === "activity-high") {
    rate = 1.725;
  } else if (evt.target.id === "activity-maximal") {
    rate = 1.9;
  }
});

resetButton.addEventListener("click", () => {
  age.value = "";
  genderMale.checked = true;
  weight.value = "";
  height.value = "";
  activity.checked = true;
  resultButton.disabled = true;
  resetButton.disabled = true;
  resultsBlock.classList.add("counter__result--hidden");
});

resultButton.addEventListener("click", evt => {
  evt.preventDefault();
  calculateResult(rate);
  resultsBlock.classList.remove("counter__result--hidden");
});

export {
  age,
  genderMale,
  weight,
  height,
  resetButton,
  resultButton
};
