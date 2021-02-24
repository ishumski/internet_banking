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
                    // console.log(value);
                    console.log(textNode);
                    cell.appendChild(textNode);
                    row.appendChild(cell);

                })
                table.appendChild(row);
            }

        });
    })
exchangeRates.appendChild(table);

/*current date*/
function currentDate() {

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
}

currentDate();