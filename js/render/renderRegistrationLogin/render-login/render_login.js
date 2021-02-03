import loginTemplate from "../../../templates/pages/login/index.js";
import {registration} from "../render-registration/render_registration.js"

const rootDiv = document.querySelector(".container");

export function login() {
    rootDiv.innerHTML = loginTemplate;
    const signIn = document.querySelector(".sign-in");
    signIn.addEventListener("click", () => {
        registration();
    })
} 