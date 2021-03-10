import { registration } from "./render/renderRegistrationLogin/render-registration/render_registration.js"
import { login } from "./render/renderRegistrationLogin/render-login/render_login.js"
import { renderPage } from "./utils/routing.js"

renderPage();

window.addEventListener('popstate', () => {
    renderPage();
})
