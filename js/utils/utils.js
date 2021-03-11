export function showErrors(errors) {

    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"]+span`);

        if (errors[key].length > 0) {

            const errorStr = errors[key].join("\n");
            span.innerHTML = errorStr;
        } else {
            span.innerHTML = "";
        }
    };
};

export function checkIfHasErrors(errors) {
    return Object.keys(errors).some(key => errors[key].length > 0);
};

export default function currentDate() {

    const curDate = document.querySelector(".current_date");

    const date = new Date();

    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();

    if (day.length < 2) {
        day = `${0 + day}`;
    }

    if (month.length < 2) {
        month = `${0 + month}`;
    }

    curDate.innerHTML = `${day}.${month}.${year}`;
};

export function amountValue() {

    const amount = document.querySelector("#amount");
    const months = document.querySelector("#months");
    const slider = document.querySelector("#slider");
    const span = document.querySelector("#profit__amount");
    const interest = document.querySelector(".interest")
    const tax = document.querySelector(".tax")
    const INCOME_TAX = 13;

    slider.addEventListener("mouseup", () => {
        const sliderValue = slider.value;
        amount.value = sliderValue;

        interest.innerHTML = ` ${(span.innerHTML - (span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
        tax.innerHTML = ` ${((span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
    });

    amount.addEventListener("keyup", () => {
        const sliderValue = slider.value;
        amount.value = sliderValue;

        interest.innerHTML = ` ${(span.innerHTML - (span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
        tax.innerHTML = ` ${((span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
    });

    months.addEventListener("click", () => {
        const sliderValue = slider.value;
        amount.value = sliderValue;

        interest.innerHTML = ` ${(span.innerHTML - (span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
        tax.innerHTML = ` ${((span.innerHTML * INCOME_TAX) / 100).toFixed(2)}`;
    });


};