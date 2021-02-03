import registrationTemplate from "../../../templates/pages/registaration/index.js"
import { login } from "../render-login/render_login.js";
// import {userRegistration} from "../../../authorization/user_registration.js"

const rootDiv = document.querySelector(".container");

export function registration() {
    rootDiv.innerHTML = registrationTemplate;

    // const x = document.querySelector(".register");
    // console.log(x);
    // x.addEventListener("submit", userRegistration);
    const signUp = document.querySelector(".sign-up");
    signUp.addEventListener("click", () => {
        login();
    });
}


