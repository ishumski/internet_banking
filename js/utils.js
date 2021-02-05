export function showErrors(errors) {
    for (let key in errors) {
        if (errors[key].length > 0) {
            const errorStr = errors[key].join("\n");
            span.innerHTML = errorStr;
        } else {
            span.innerHTML = "";
        }
    }
}