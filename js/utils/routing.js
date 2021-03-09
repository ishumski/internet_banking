import { registration } from "../render/renderRegistrationLogin/render-registration/render_registration.js"
import { login } from "../render/renderRegistrationLogin/render-login/render_login.js"
import currentUser from "../utils/current_user.js"
import renderMain from "../render/renderPages/main-page/render_main.js";
import renderPersonalPage from "../render/renderPersonalPage/render_personal_page.js";

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

const LOGIN_URL = "/login";


export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (INDEX_URLS.includes(currentUrl)) {
        if (currentUser.userData) {
            renderPersonalPage();
            return;
        }

        renderMain();
        return;
    }

    if (!currentUser.userData && currentUrl === REGISTRATION_URL) {
        registration();
        return;
    }
    if (!currentUser.userData && currentUrl === LOGIN_URL) {
        login();
        return;
    }
    
    navigateToUrl("/");
}

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);
    renderPage();
}