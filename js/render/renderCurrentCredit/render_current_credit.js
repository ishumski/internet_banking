import templateCurrentCredit from "../../templates/pages/credits/credit_page/index.js"
import {amountOfValue} from "../../utils/utils.js"

const rootDiv = document.querySelector(".container");

export default function renderCurrentCredit() {
    rootDiv.innerHTML = templateCurrentCredit;

    const amount = document.querySelector("#amount");
    const slider = document.querySelector("#slider");
    const months = document.querySelector("#months");
    const payAmount = document.querySelector("#pay__amount");

    const INTEREST_RATE = 28.90;
    const MONTH_IN_YEAR = 12;
    const MONTH_RATE = (INTEREST_RATE / MONTH_IN_YEAR) / 100;

    function creditCount(sum, term) {

        const paymentPerMonth = (sum * (MONTH_RATE + (MONTH_RATE / (Math.pow(1 + MONTH_RATE, term) - 1)))).toFixed(2);
        return paymentPerMonth;
    };

    amount.addEventListener("keyup", (event) => {
        event.preventDefault();

        slider.value = amount.value;

        payAmount.innerHTML = ` ${creditCount(slider.value, months.value)}`;
        return
    });

    slider.addEventListener("mouseup", (event) => {
        event.preventDefault();

        payAmount.innerHTML = ` ${creditCount(slider.value, months.value)}`;
        return
    });

    months.addEventListener("click", (event) => {
        event.preventDefault();

        payAmount.innerHTML = ` ${creditCount(slider.value, months.value)}`;
        return
    });

    amountOfValue()
};