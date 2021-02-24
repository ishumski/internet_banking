const amount = document.querySelector("#amount");
const months = document.querySelector("#months");
const slider = document.querySelector("#slider");
const span = document.querySelector("#profit__amount");
const interest = document.querySelector(".interest")
const tax = document.querySelector(".tax")

const MIN_AMOUNT_VALUE = 100;
const MAX_AMOUNT_VALUE = 100000;

//расчет процентов по депозиту
amount.addEventListener("keyup", () => {
    if (amount.value > MIN_AMOUNT_VALUE) {
        slider.value = amount.value;
    } else {
        slider.value = 100;
    }
})

function depositCounter(sum, term) {

    const INTEREST_RATE = 20;
    const MONTH_IN_YEAR = 12;
    let currentRate = (INTEREST_RATE / MONTH_IN_YEAR) * term;
    let income = (currentRate * sum) / 100;
    let incomeRounded = Math.round(income * 100) / 100;
    return incomeRounded;
    // Math.round(num * 100) / 100 округление
}

//вывод суммы процентов по клику
slider.addEventListener("mouseup", (event) => {
    event.preventDefault();
    if (!slider.value) {
        return;
    }
    if (slider.value < MIN_AMOUNT_VALUE || slider.value > MAX_AMOUNT_VALUE) {
        return;
    }

    span.innerHTML = ` ${depositCounter((slider.value), months.value)}`;
});

//при нажатии на ползунок сумма отображается в инпуте
function amountValue() {
    const slider = document.querySelector("#slider");

    slider.addEventListener("mouseup", () => {
        const sliderValue = slider.value;
        amount.value = sliderValue;

        interest.innerHTML = ` ${(span.innerHTML - (span.innerHTML * 13) / 100).toFixed(2)}`;
        tax.innerHTML = ` ${((span.innerHTML * 13) / 100).toFixed(2)}`;
    })
}
amountValue();