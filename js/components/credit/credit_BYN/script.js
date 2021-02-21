const amount = document.querySelector("#amount");
const slider = document.querySelector("#slider");
const months = document.querySelector("#months");
const span = document.querySelector("span");
const button =  document.querySelector("button");

const INTEREST_RATE = 28.90;
const MONTH_IN_YEAR = 12;
const MONTH_RATE = (INTEREST_RATE / MONTH_IN_YEAR) / 100;


function creditCount(sum, term) {
    
    const paymentPerMonth = (sum * (MONTH_RATE + (MONTH_RATE / (Math.pow(1 + MONTH_RATE, term) - 1)))).toFixed(2);
    return paymentPerMonth;
}

button.addEventListener("click", ()=>{
    span.textContent = creditCount(amount.value, months.value);
})