export default class CurrencyService {
  static getCurrency(currency1, currency2){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}`)
      .then(function(response){
        if(!response.ok){
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error){
        return error
      })  
  } 
}
