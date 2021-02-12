import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/getCurrency.js';

function displayConversion(response, amount){
  if(response.result === 'success'){
    const lastUpdate = (response.time_last_update_utc).slice(0,25);
    const nextUpdate = (response.time_next_update_utc).slice(0,25);
    $('div.hide').hide();
    $('div#output').show();
    $('div#output').html(`
    <p>You picked ${response.base_code} to be converted to ${response.target_code}!</p>
    <p>${amount ? `The amount you chose to convert was: ${amount} ${response.base_code}</p>` : ""}
    <p>The conversion rate for ${response.base_code} to ${response.target_code} is: ${response.conversion_rate} ${response.target_code} for every 1 ${response.base_code}</p>
    <p>${amount ? `${amount} ${response.base_code} converted to ${response.target_code} is: ${response.conversion_result} ${response.target_code}</p>` : "" }
    <p>Last updated: ${lastUpdate}</p>
    <p>Next update: ${nextUpdate}</p>
    <br/>
    <br/>
    <button class="btn btn-primary" id="return">Do another conversion!</button>`);
    clearValues();
    returnHome();
  } else if(response.message === "unsupported-code"){
    $('div#error-div').show().html(`<p>An Error occured: One of the currencies you entered is either incorrect or unsupported</p>`);
  } else {
    $('div#error-div').show().html(`<p class="text-center" id="warning">An Error occured: Please enter a missing currency or valid amount</p>`);
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


// FUNCTIONALITY NESSECCARY
// A user should be able to enter in US dollars and get a different currency in return using the API - checked
// Users should be able to convert US currency to atleast 5 others - checked
// Error handling for API call - checked
// API key in .env file - checked 
// Message for if a user enters a currency that doesn't exist

// MAIN OBJECTIVES
// Correctly call API - checked
//  Correctly parse data - checked
//  error handling
//  follow setup, store API key, add instructions to README
// seperate logic into multipe files, use a static method - checked
