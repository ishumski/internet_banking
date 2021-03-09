import template from "../../../templates/pages/main/index.js";
import { navigateToUrl } from "../../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderMain() {
    rootDiv.innerHTML = template;

    const registrationBtn = document.querySelector('.register-btn');

    registrationBtn.addEventListener('click', (event) => {
        event.preventDefault();

        navigateToUrl('/registration');
    });

    const loginBtn = document.querySelector(".login-link");

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();

        navigateToUrl('/login');
    });
}