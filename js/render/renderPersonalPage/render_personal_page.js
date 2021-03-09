import templatePersonalPage from "../../templates/pages/personal_page/index.js"
import { navigateToUrl } from "../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderPersonalPage() {
    rootDiv.innerHTML = templatePersonalPage;

}