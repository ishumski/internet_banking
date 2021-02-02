import { registration } from "./render/renderRegistrationLogin/render-registration/render_registration.js"
import { login } from "./render/renderRegistrationLogin/render-login/render_login.js"

//обработчик событий вешаем на кнопку Register
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", registration);

//обработчик событий вешаем на кнопку Login
const loginBtn = document.querySelector(".login-link");
loginBtn.addEventListener("click", login)
