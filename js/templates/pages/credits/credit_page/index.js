const template = `
<div class="credit-wrapper">
    <div class="credit__form">
        <h3>Рассчитайте кредит</h3>
        <form action="">
            <div class="slider-amount">
                <input id="amount" type="number" name="amount">
                <input id="slider" type="range" min="1000" max="15000" step="1" value="1000">
             </div>
            <div class="select-month">
                <select name="months" id="months" class="months">
                     <option value="12">12 месяцев</option>
                      <option value="24">24 месяца</option>
                      <option value="48">48 месяца</option>
                      <option value="60">60 месяцев</option>
                </select>
            </div>
        </form>
    </div>
    <div class="pay-wrapper">
        <div class="pay">
            <h3>Ваш ежемесячный платёж</h3>
            <p class="pay__amount" id="pay__amount"></p>
            <div class="pay__img">
                <img src="/images/deposit.png" alt="">
             </div>
        </div>
    </div>

</div>
`
export default template;