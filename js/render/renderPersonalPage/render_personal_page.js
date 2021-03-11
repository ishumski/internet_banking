import templatePersonalPage from "../../templates/pages/personal_page/index.js"
import { navigateToUrl } from "../../utils/routing.js";
import logOut from "../../utils/logout.js"

const rootDiv = document.querySelector(".container");

export default function renderPersonalPage() {
    rootDiv.innerHTML = templatePersonalPage;

    const paymentsBtn = document.querySelector(".option__menu-payments");
    const currencyBtn = document.querySelector(".option__menu-currency");
    const depositsBtn = document.querySelector(".option__menu-deposits");
    const creditsBtn = document.querySelector(".option__menu-credits");
    const logOutBtn = document.querySelector(".logout-btn");

    paymentsBtn.addEventListener("click", (event) => {
        event.preventDefault();

    });

    currencyBtn.addEventListener("click", (event) => {
        event.preventDefault();
        navigateToUrl("/exchange_rates");
    });

    depositsBtn.addEventListener("click", (event) => {
        event.preventDefault();
        navigateToUrl("/deposit_list");
    });

    creditsBtn.addEventListener("click", (event) => {
        event.preventDefault();
        navigateToUrl("/credit_list");
    });

    logOutBtn.addEventListener("click", logOut);
}