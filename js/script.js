import { renderPage } from "./utils/routing.js"

renderPage();

window.addEventListener('popstate', () => {
    renderPage();
});
