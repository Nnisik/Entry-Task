<script lang="ts">
  import "./style/style.css";

  function getApiData() {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${inputCurrencySeelectValue}`)
      .then((response) => response.json())
      .then((json) => {
        let calculateResult = parseFloat(documet.querySelector("#input").value) * json["conversion_rates"][resultCurrencySeelectValue];
        resultField.querySelector("input").textContent(calculateResult);    
        exchangeRates = json;
    });
  }

  // TODO: result recalculation function
  // TODO: 

  // api key
  const API_KEY = "";
  // html elements
  const resultField = documet.querySelector("#result");
  // currency selectors
  let inputCurrencySeelectValue = documet.querySelector("#input-currency").value;
  let resultCurrencySeelectValue = documet.querySelector("#result-currency").value;
  // currencies data
  let exchangeRates;

  // api connection and getting
  window.onload = getApiData();

  documet.querySelector("#result-currency").onChange = getApiData();

  documet.querySelector("#input").onChange = () => {
    let calculateResult = parseFloat(documet.querySelector("#input").value) * json["conversion_rates"][resultCurrencySeelectValue];
    resultField.querySelector("input").textContent(calculateResult);   
  }
</script>

<main>
  <article class="converter-container">
    <h1 class="converter-header">Convert currency</h1>
    <section class="converter-fields">
      <div class="currency-container" id="search">
        <input type="number" name="" class="input" placeholder="1" id="input" />
        <select class="currensy-celect-btn" id="input-currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
      <div class="currency-container" id="result">
        <p class="input"></p>
        <select class="currensy-celect-btn" id="result-currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
    </section>
  </article>
</main>