import templateDepositList from "../../templates/pages/deposits/deposits_list/index.js"
import renderCurrentDeposite from "../renderCurrentDeposit/render_current_deposit.js"
import { navigateToUrl } from "../../utils/routing.js";

const rootDiv = document.querySelector(".container");

export default function renderDepositList() {
    rootDiv.innerHTML = templateDepositList;

    const easyMoneyBtn = document.querySelector(".easy-money");

    easyMoneyBtn.addEventListener("click", (event) => {
        event.preventDefault();

        navigateToUrl("/deposit_page");
    })
}