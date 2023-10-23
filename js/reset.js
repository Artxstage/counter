import { age, weight, height, resultButton, resetButton } from "./script.js";

const reset = () => {
  resetButton.disabled = !(age.value !== "" || height.value !== "" || weight.value !== "");
  resultButton.disabled = !(age.value !== "" && height.value !== "" && weight.value !== "");
};

export { reset };
