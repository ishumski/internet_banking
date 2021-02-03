import registrationTemplate from "../../../templates/pages/registaration/index.js"
import { login } from "../render-login/render_login.js";

const rootDiv = document.querySelector(".container");

export function registration() {
    rootDiv.innerHTML = registrationTemplate;
    const signUp = document.querySelector(".sign-up");
    signUp.addEventListener("click", () => {
        login();
    });
}
