
const template = `
    <div class="deposit-wrapper">
        <div class="deposite__form">
            <h3>Рассчитайте доход</h3>
            <form action="">
                <div class="slider-amount">
                    <input id="amount" type="number" name="amount">
                    <input id="slider" type="range" min="100" max="100000" step="1" value="100" size="1">
                </div>
                <div class="select-month">
                    <select class="months" name="months" id="months">
                        <option value="1">1 месяц</option>
                        <option value="3">3 месяца</option>
                        <option value="6">6 месяцев</option>
                        <option value="9">9 месяцев</option>
                        <option value="12">12 месяцев</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="profit-wrapper">
            <div class="profit">
                <h3>Ваш доход включая налог</h3>
                <p class="profit__amount" id="profit__amount"></p>
                <div class="profit__img">
                    <img src="/images/deposit.png" alt="">
                </div>
                <div class="profit__amount-info">
                    <p>Проценты:<span class="interest"></span></p>
                    <p>Налог:<span class="tax"></span></p>
                </div>
            </div>
        </div>
    </div>

    <script src="/js/components/deposits/deposit-page/script.js"></script>
`
export default template;