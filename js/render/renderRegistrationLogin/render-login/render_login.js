import loginTemplate from "../../../templates/pages/login/index.js";
import registrationTemplate from "../../../templates/pages/registaration/index.js"

const rootDiv = document.querySelector(".container");

export function login() {
    rootDiv.innerHTML = loginTemplate;
    const signIn = document.querySelector(".sign-in");
    signIn.addEventListener("click", () => {
        rootDiv.innerHTML = registrationTemplate;
    })

} 