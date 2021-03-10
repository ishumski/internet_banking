export function showErrors(errors) {

    console.log(errors)

    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"]+span`);

        console.log(span)

        if (errors[key].length > 0) {

            const errorStr = errors[key].join("\n");
            span.innerHTML = errorStr;
        } else {
            span.innerHTML = "";
        }
    }
}

export function checkIfHasErrors(errors) {
    return Object.keys(errors).some(key => errors[key].length > 0);
}


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
}