import { reregistration } from "../render/renderRegistrationLogin/render-registration/render_registration.js"
import { login } from "../render/renderRegistrationLogin/render-login/render_login.js"
import currentUser from "../utils/current_user.js"

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

const LOGIN_URL = "/login";


export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (!currentUser.userData && currentUrl === REGISTRATION_URL) {
        reregistration();
        return;
    }
    if (!currentUser.userData && currentUrl === LOGIN_URL) {
        login();
        return;
    }
    

}

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);
    renderPage();
}