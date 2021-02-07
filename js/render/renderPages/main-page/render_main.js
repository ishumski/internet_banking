import renderMain from "../../../templates/pages/main/index.js";

const rootDiv = document.querySelector(".container");

export function mainPage() {
    rootDiv.innerHTML = renderMain;
}