document.addEventListener('DOMContentLoaded', function() {
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey="OskKJsUE/CEHnN38qJ8JWw==ZMJyToylj1ufmgs8"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiUrl + currencyTotal;

  fetch(url, {
    headers: {
      'X-API-KEY': apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    const rate = data.exchange_rate;
    const resultConvert = amountTotal * rate;
    result.innerHTML = `${amount} ${currency} = ${resultConvert.toFixed(2)} USD`
  })
  .catch(error => {
    console.error('Request failed', error);
    result.innerHTML = 'An error occurred please try again later.'
  })

})
})