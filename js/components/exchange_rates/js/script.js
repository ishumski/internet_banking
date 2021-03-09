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
    .then(result => {

        const rows = result.map((currency) => {
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
        tbody.innerHTML = rows.join("");
        table.appendChild(tbody);







    });

exchangeRates.appendChild(table);

// /*current date*/
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


/*конвертёр валют */


