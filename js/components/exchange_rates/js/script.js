// const purchaseRate = document.querySelectorAll(".purchase_rate");
// const purchase = document.querySelectorAll("#purchase_rate");



// const p = document.querySelector("p");

fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
    .then(response => response.json())
    .then(result => {
        // result.forEach(elem => {
        //     const purchaseRate = document.querySelectorAll(".purchase_rate");
        //     const span = document.createElement("span");

        //     let { Cur_ID, Cur_Abbreviation, Cur_Scale, Cur_Name, Cur_OfficialRate } = elem;

        //     if (Cur_ID == 145 || Cur_ID == 292 || Cur_ID == 143 || Cur_ID == 293 || Cur_ID == 298) {

        //         let data = `${Cur_Scale} ${Cur_Abbreviation}  ${Cur_Name}  ${Cur_OfficialRate}`;
        //         span.innerHTML = data;

        //         // purchaseRate.innerHTML =  purchaseRate.innerHTML+ `${Cur_Scale}`;
               
        //         return purchaseRate; 
                
            // }
            
        // });
        console.log(result)
    })