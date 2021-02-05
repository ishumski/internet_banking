import userRegistration from "../../../authorization/user_registration.js";
import registrationTemplate from "../../../templates/pages/registaration/index.js"
import { login } from "../render-login/render_login.js";
// import {userRegistration} from "../../../authorization/user_registration.js"

//обращаемся к нашему корневому элементу HTML, куда будем загружать наш контент(<div class="container">)
const rootDiv = document.querySelector(".container");

//пишем ф-ю, которая меняет innerHTML корневого узла rootDiv
export function registration() {
    rootDiv.innerHTML = registrationTemplate;

    //обращаемся к нашей форме и вешаем обработчик событий при нажатии кнопки [type="submit"]
    const form = document.querySelector(".registration__form > form");
    form.addEventListener('submit', userRegistration);
    
    //
    const signIn = document.querySelector(".sign-in");
    signIn.addEventListener("click", () => {
        login();
    });
}


