import templateCurrentDeposite from "../../templates/pages/deposits/deposit_page/index.js"
import { navigateToUrl } from "../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderCurrentDeposite() {
    rootDiv.innerHTML = templateCurrentDeposite;

};