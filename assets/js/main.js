const inputMode = document.querySelector("#mode");
const body = document.querySelector("body");

inputMode.checked = true;

inputMode.addEventListener("change", () => {
  if (inputMode.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
