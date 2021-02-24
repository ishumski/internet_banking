const exchangeRates = document.querySelector(".exchange__rates");

const headers = ["Валюта", "Покупка", "Продажа"];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

headers.forEach(elem => {
    const header = document.createElement("th");
    const textNode = document.createTextNode(elem);

    header.appendChild(textNode);
    headerRow.appendChild(header);
})

table.appendChild(headerRow);
exchangeRates.appendChild(table);


fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
    .then(response => response.json())
    .then(result => {
        result.forEach(elem => {
            const row = document.createElement("tr");
            let { Cur_ID, Cur_Abbreviation, Cur_Scale, Cur_Name, Cur_OfficialRate } = elem;

            if (Cur_ID == 145 || Cur_ID == 292 || Cur_ID == 143 || Cur_ID == 293 || Cur_ID == 298) {

                Object.values(elem).forEach((value) => {

                    const cell = document.createElement("td");
                    const textNode = document.createTextNode(value);

                    cell.appendChild(textNode);
                    row.appendChild(cell);

                })
                table.appendChild(row);
            }

        });
    })
exchangeRates.appendChild(table);