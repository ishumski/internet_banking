import templateCurrentCredit from "../../templates/pages/credits/credit_page/index.js"
import { navigateToUrl } from "../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderCurrentCredit() {
    rootDiv.innerHTML = templateCurrentCredit;



};