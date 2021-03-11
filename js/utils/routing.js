import { registration } from "../render/renderRegistrationLogin/render-registration/render_registration.js"
import { login } from "../render/renderRegistrationLogin/render-login/render_login.js"
import currentUser from "../utils/current_user.js"
import renderMain from "../render/renderPages/main-page/render_main.js";
import renderPersonalPage from "../render/renderPersonalPage/render_personal_page.js";
import renderDepositList from "../render/renderDepositsList/render_deposits_list.js"
import renderCurrentDeposite from "../render/renderCurrentDeposit/render_current_deposit.js"
import renderCreditList from "../render/renderCreditsList/render_credit_list.js"
import renderCurrentCredit from "../render/renderCurrentCredit/render_current_credit.js"
import renderExchangeRates from "../render/render_exchange_rates/render_exchange_rates.js"

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

export const LOGIN_URL = "/login";

const DEPOSIT_LIST_URL = "/deposit_list";
const DEPOSITE_PAGE = "/deposit_page";

const CREDIT_LIST_URL = "/credit_list";
const CREDIT_PAGE = "/credit_page";

const EXCHANGE_RATES_URL = "/exchange_rates";

export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (INDEX_URLS.includes(currentUrl)) {
        if (currentUser.userData) {
            renderPersonalPage();
            return;
        };

        renderMain();
        return;
    };

    if (currentUrl === DEPOSIT_LIST_URL) {
        renderDepositList();
        return;
    };
    if (currentUrl === DEPOSITE_PAGE) {
        renderCurrentDeposite();
        return;
    };

    if (currentUrl === CREDIT_LIST_URL) {
        renderCreditList();
        return;
    };

    if (currentUrl === CREDIT_PAGE) {
        renderCurrentCredit();
        return;
    };

    if (currentUrl === EXCHANGE_RATES_URL) {
        renderExchangeRates()
        return;
    };


    if (!currentUser.userData && currentUrl === REGISTRATION_URL) {
        registration();
        return;
    };

    if (!currentUser.userData && currentUrl === LOGIN_URL) {
        login();
        return;
    };

    navigateToUrl("/");
};

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);
    renderPage();
};