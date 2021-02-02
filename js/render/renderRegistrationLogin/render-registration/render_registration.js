import registrationTemplate from "../../../templates/pages/registaration/index.js"
import loginTemplate from "../../../templates/pages/login/index.js";

const rootDiv = document.querySelector(".container");

export function registration() {
    rootDiv.innerHTML = registrationTemplate;
    const signUp = document.querySelector(".sign-up");
    signUp.addEventListener("click", () => {
        rootDiv.innerHTML = loginTemplate;
    });

}
