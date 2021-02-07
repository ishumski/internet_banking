import loginTemplate from "../../../templates/pages/login/index.js";
import { registration } from "../render-registration/render_registration.js"
import userLogin from "../../../authorization/user_login.js";

const rootDiv = document.querySelector(".container");

export function login() {
    rootDiv.innerHTML = loginTemplate;

    const form = document.querySelector(".registration__form > form");
    form.addEventListener("submit", userLogin);


    const signUp = document.querySelector(".sign-up");
    signUp.addEventListener("click", () => {
        registration();
    })
} 