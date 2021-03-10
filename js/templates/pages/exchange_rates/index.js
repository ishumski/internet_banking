const template = `
<h2>Курсы валют на <span class="current_date"></span></h2>
<div class="exchange__rates">
</div>

        <div class="BYN">
            <input type="text" id="BYN" type="number" min="0" max="10000">
            <span>BYN</span>
        </div>

        <div class="USD">
            <input type="text" id="USD" type="number" min="0" max="10000">
            <span>USD</span>
        </div>

        <div class="EUR">
            <input type="text" id="EUR" type="number" min="0" max="10000">
            <span>EUR</span>
        </div>

        <div class="PLN">
            <input type="text" id="PLN" type="number" min="0" max="10000">
            <span>PLN</span>
        </div>

        <div class="RUB">
            <input type="text" id="RUB" type="number" min="0" max="10000">
            <span>RUB</span>
        </div>

        <div class="GBP">
            <input type="text" id="GBP" type="number" min="0" max="10000">
            <span>GBP</span>
        </div>
        
`

export default template;