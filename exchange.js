document.addEventListener('DOMContentLoaded', function() {
const convertFrom = document.getElementById("currencyFrom")
const amount = document.getElementById('amount');
const currencyTo = document.getElementById('currencyTo');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey="OskKJsUE/CEHnN38qJ8JWw==ZMJyToylj1ufmgs8"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair="

convert.addEventListener('click', () => {
  const amountTotal = amount.value;
  const currencyToSign = currencyTo.value;
  const currencyFromSign = currencyFrom.value;
  const url = apiUrl + currencyFromSign + "_" + currencyToSign;

  fetch(url, {
    headers: {
      'X-API-KEY': apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    const rate = data.exchange_rate;
    const resultConvert = amountTotal * rate;
    result.innerHTML = `${amountTotal} ${currencyFromSign} = ${resultConvert.toFixed(4)} ${currencyToSign}`
  })
  .catch(error => {
    console.error('Request failed', error);
    result.innerHTML = 'An error occurred please try again later.'
  })

})
})