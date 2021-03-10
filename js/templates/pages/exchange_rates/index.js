const template = `
<div class="exchange__rates-wrapper">
    <div class="exchange__rates-info">
        <div class="exchange__rates-current">
            <h2>Курсы валют на <span class="current_date"></span></h2>
                <div class="exchange__rates">
            </div>
        </div>
    

    <div class="currency__convertor"> 
        <div class="BYN curr-input">
            <input type="text" id="BYN" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/belarus-24px.png">
            BYN</span>
        </div>

        <div class="USD curr-input">
            <input type="text" id="USD" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/united-states-24px.png">
            USD</span>
        </div>

        <div class="EUR curr-input">
            <input type="text" id="EUR" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/european-union24px.png">
            EUR</span>
        </div>

        <div class="PLN curr-input">
            <input type="text" id="PLN" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/poland24px.png">
            PLN</span>
        </div>

        <div class="RUB curr-input">
            <input type="text" id="RUB" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/russia24px.png">
            RUB</span>
        </div>

        <div class="GBP curr-input">
            <input type="text" id="GBP" type="number" min="0" max="10000">
            <span class="curr-info">
            <img src="images/flag-icons/great-britain24px.png">
            GBP</span>
        </div>
        </div>
    </div>
</div>     
`

export default template;