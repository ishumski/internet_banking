import templateCurrentDeposite from "../../templates/pages/deposits/deposit_page/index.js"
import { amountValue } from "../../utils/utils.js"

const rootDiv = document.querySelector(".container");

export default function renderCurrentDeposite() {
    rootDiv.innerHTML = templateCurrentDeposite;

    const amount = document.querySelector("#amount");
    const months = document.querySelector("#months");
    const slider = document.querySelector("#slider");
    const span = document.querySelector("#profit__amount");

    const MIN_AMOUNT_VALUE = 100;
    const MAX_AMOUNT_VALUE = 100000;

    function depositCounter(sum, term) {

        const INTEREST_RATE = 20;
        const MONTH_IN_YEAR = 12;

        let currentRate = (INTEREST_RATE / MONTH_IN_YEAR) * term;
        let income = (currentRate * sum) / 100;
        let incomeRounded = Math.round(income * 100) / 100;
        return incomeRounded;
    }

    amount.addEventListener("keyup", () => {
        if (amount.value > MIN_AMOUNT_VALUE || amount.value < MAX_AMOUNT_VALUE) {
            slider.value = amount.value;
        }
        span.innerHTML = ` ${depositCounter((slider.value), months.value)}`;
        return;
    })

    slider.addEventListener("mouseup", (event) => {
        event.preventDefault();
        if (!slider.value) {
            return;
        }
        if (slider.value < MIN_AMOUNT_VALUE || slider.value > MAX_AMOUNT_VALUE) {
            return;
        }

        span.innerHTML = ` ${depositCounter((slider.value), months.value)}`;
        return;
    });

    months.addEventListener("click", (event) => {
        event.preventDefault();
        span.innerHTML = ` ${depositCounter((slider.value), months.value)}`;
        return;
    });

    amountValue();
};