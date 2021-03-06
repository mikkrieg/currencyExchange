import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/getCurrency.js';
function displayConversion(response, amount){
  const errorArray = Object.values(response);
  if(response.result === 'success'){
    const lastUpdate = (response.time_last_update_utc).slice(0,25);
    const nextUpdate = (response.time_next_update_utc).slice(0,25);
    $('div.hide').hide();
    $('div#output').show();
    $('div#output').html(`
      <div class="card">
        <div class="card-title">
          <div class="card-body">
            <div class="card-text">
              <p class="text-center" id="injected-p">You picked ${response.base_code} to be converted to ${response.target_code}!</p>
              <p class="text-center" id="injected-p">${amount ? `The amount you chose to convert was: ${amount} ${response.base_code}</p>` : ""}
              <p class="text-center" id="injected-p">The conversion rate for ${response.base_code} to ${response.target_code} is: 
              ${response.conversion_rate} ${response.target_code} for every 1 ${response.base_code}</p>
              <p class="text-center" id="injected-p">${amount ? `${amount} ${response.base_code} converted to ${response.target_code} is: 
              ${response.conversion_result} ${response.target_code}</p>` : "" }
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-secondary center" id="return">Do another conversion!</button>
                </div>
              </div>
              <p>Last updated: ${lastUpdate}</p>
              <p>Next update: ${nextUpdate}</p>
            </div>
          </div>
        </div>
      </div>`);
    clearValues();
    returnHome();
  } else if(errorArray[1] === 'unsupported-code'){
    // Error handling if query response does not include particular currency
    $('div#error-div').show().html(`<p class="text-center warning">An Error occured: One of the currencies you entered is either incorrect or unsupported</p>`);
  } else {
    // Error handling if an input is empty and call is unable to fetch response
    $('div#error-div').show().html(`<p class="text-center warning">An Error occured: Please enter a missing currency or valid amount</p>`);
  } 
}
function returnHome(){
  $('button#return').on('click', function(){
    $('div#error-div').hide();
    $('div#output').hide();
    $('div.hide').show();
  });
}
function clearValues(){
  $('select#currency-1').val('');
  $('select#currency-2').val('');
  $('input#amount').val('');
}
function main(){
  $('button#convert').on('click', function(){
    const currency1 = $('select#currency-1').val();
    const currency2 = $('select#currency-2').val();
    const amount = $('input#amount').val();
    CurrencyService.getCurrency(currency1, currency2, amount)
      .then(function(response){
        displayConversion(response, amount);
      });
  });
}
main();
