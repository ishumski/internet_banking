import templateExchangeRates from "../../templates/pages/exchange_rates/index.js"
import currentDate from "../../utils/utils.js"

const rootDiv = document.querySelector(".container");

export default function renderExchangeRates() {
    rootDiv.innerHTML = templateExchangeRates;

    //рендер таблицы для получения курсов валют по API
    const exchangeRates = document.querySelector(".exchange__rates");

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headers = ["Валюта", "Покупка", "Продажа"];
    const headerRow = document.createElement("tr");

    headers.forEach(elem => {
        const header = document.createElement("th");
        const textNode = document.createTextNode(elem);

        header.appendChild(textNode);
        headerRow.appendChild(header);
    })
    thead.appendChild(headerRow)
    table.appendChild(thead);
    exchangeRates.appendChild(table);


    const BANK_RATE = 1.15;

    fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
        .then(response => response.json())
        .then(curr => {

            const currencyBYN = {
                Cur_Abbreviation: "BYN",
                Cur_Name: "Беларусский рубль",
                Cur_OfficialRate: 1,
                Cur_Scale: 1,
            }

            const currencies = curr.concat(currencyBYN);

            const rows = currencies.map((currency) => {
                let { Cur_ID, Cur_Abbreviation, Cur_Scale, Cur_Name, Cur_OfficialRate } = currency;

                if ([145, 292, 143, 293, 298].includes(Cur_ID)) {

                    return `
                    <tr>
                        <td>${Cur_Scale} ${Cur_Name} (${Cur_Abbreviation})</td>
                        <td>${Cur_OfficialRate}</td>
                        <td>${(Cur_OfficialRate + ((Cur_OfficialRate * BANK_RATE) / 100)).toFixed(4)}</td>
                    </tr>

                    `
                }
            });

            let inputs = Array.from(document.querySelectorAll("input"));

            inputs.forEach((input) => {

                input.addEventListener("input", (event) => {
                    event.preventDefault();

                    const filtered = inputs.filter((elem) => (elem.id !== event.target.id));

                    filtered.forEach((elem) => {

                        let currency = currencies.find((curr) => curr.Cur_Abbreviation === elem.id);
                        let baseCurrencyRate = currencies.find((curr) => curr.Cur_Abbreviation === event.target.id);

                        let { Cur_OfficialRate, Cur_Scale } = currency;

                        if (event.target.id !== "BYN") {

                            elem.value = parseFloat(event.target.value * ((baseCurrencyRate.Cur_OfficialRate / Cur_OfficialRate) * Cur_Scale)) !== 0 ?
                                parseFloat((event.target.value * ((baseCurrencyRate.Cur_OfficialRate / Cur_OfficialRate) * Cur_Scale)).toFixed(4)) : "";

                            if (baseCurrencyRate.Cur_Scale > 1) {
                                elem.value = parseFloat(event.target.value * (((baseCurrencyRate.Cur_OfficialRate / baseCurrencyRate.Cur_Scale) / Cur_OfficialRate) * Cur_Scale)) !== 0 ?
                                    parseFloat((event.target.value * (((baseCurrencyRate.Cur_OfficialRate / baseCurrencyRate.Cur_Scale) / Cur_OfficialRate) * Cur_Scale)).toFixed(4)) : "";
                            }

                            return;
                        }

                        elem.value = parseFloat((event.target.value / Cur_OfficialRate) * Cur_Scale) !== 0 ?
                            parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(4)) : "";

                        elem.addEventListener("focusout", elemFocusOut);

                        function elemFocusOut(event) {
                            const inputValue = event.target.value;
                            if (isNaN(inputValue) || Number(inputValue) === 0) {
                                event.target.value = "";
                                return;
                            } else {
                                event.target.value = Number(inputValue).toFixed(4);
                            }
                        }


                    })
                });
            })

            tbody.innerHTML = rows.join("");
            table.appendChild(tbody);
        });

    exchangeRates.appendChild(table);

    currentDate();

}