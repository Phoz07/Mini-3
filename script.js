const inputEl = document.querySelector("input");
const countEl = document.querySelector(".count");

inputEl.addEventListener("keyup", () => {
    countEl.innerHTML = inputEl.value.length;
})