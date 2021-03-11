import userRegistration from "../../../authorization/user_registration.js";
import registrationTemplate from "../../../templates/pages/registaration/index.js"
import { navigateToUrl } from "../../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export function registration() {
    rootDiv.innerHTML = registrationTemplate;

    const form = document.querySelector(".registration__form > form");
    form.addEventListener('submit', userRegistration);
 
    const signIn = document.querySelector(".sign-in");

    signIn.addEventListener("click", (event) => {
        event.preventDefault();

        navigateToUrl('/login');
    });
};


