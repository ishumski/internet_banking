import templateCreditList from "../../templates/pages/credits/credits_list/index.js"
import { navigateToUrl } from "../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderCreditList() {
    rootDiv.innerHTML = templateCreditList;

    const firstCell = document.querySelector(".first-cell");

    firstCell.addEventListener("click", (event) => {
        event.preventDefault();

        navigateToUrl("/credit_page");
    });
};