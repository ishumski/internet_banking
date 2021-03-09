import templateCurrentCredit from "../../templates/pages/credits/credit_page/index.js"
import { navigateToUrl } from "../../utils/routing.js";

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
    }

    slider.addEventListener("mouseup", (event) => {
        event.preventDefault();

        payAmount.innerHTML = ` ${creditCount(slider.value, months.value)}`;
    });

    function amountValue() {
        const slider = document.querySelector("#slider");

        slider.addEventListener("mouseup", () => {
            const sliderValue = slider.value;
            amount.value = sliderValue;
        })
    }
    amountValue();

};