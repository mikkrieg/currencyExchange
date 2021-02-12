// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/getCurrency.js'; 



function main(){
  const currency1 = $('#money').val();
  const currency2 = $('#money').val();
  CurrencyService.getCurrency(currency1, currency2);
}

main();

// FUNCTIONALITY NESSECCARY
// A user should be able to enter in US dollars and get a different currency in return using the API
// Users should be able to convert US currency to atleast 5 others
// Error handling for API call
// API key in .env file
// Message for if a user enters a currency that doesn't exist

// MAIN OBJECTIVES
// Correctly call API
//  Correctly parse data
//  error handling
//  follow setup, store API key, add instructions to README
// seperate logic into multipe files, use a static method
