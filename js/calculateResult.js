import { age, genderMale, height, weight } from "./script.js";

const norm = document.querySelector("#calories-norm"), minimal = document.querySelector("#calories-minimal"),
    maximal = document.querySelector("#calories-maximal"), calculateResult = (coefficient) => {
      const rate = genderMale.checked ? 5 : -161, result =
          Math.ceil(10 * weight.value + 6.25 * height.value - 5 * age.value + rate) *
          coefficient;
      norm.textContent = result.toFixed(2);
      minimal.textContent = Math.ceil(result - result * 0.15).toFixed(
          2
      );
      maximal.textContent = Math.ceil(result + result * 0.15).toFixed(
          2
      );
    };

export { calculateResult };
