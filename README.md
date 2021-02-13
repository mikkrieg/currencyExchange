# Currency Exchange

#### Enter two currency types and an amount to recieve a conversion

#### By Mikey Kriegel

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

### Libraries Used
* _jQuery_
* _Bootstrap_
* _Jest_

### Package Managers
* _NPM_

### Module Bundlers
* _Webpack_

## Description

This is a program that communicates with the [ExchangeRate API](https://www.exchangerate-api.com/). This is an API that converts 160 different currencies. However, only ten currencies are currently able to be converted by this specific program. This program allows a user to select two currencies. One that will be converted and one that that currency will be converted to. They are also able to enter an amount to be converted, although if they only would like to see the conversion rate, then an amount is not required to be inputted. A user is able to return to the conversion selection from their result to continue converting different currencies.

## Setup/Installation Requirements

1. Clone or fork this repository to download it to your local machine
2. Navigate to the cloned or downloaded folder and enter the top level of the directory
3. Make sure npm is installed on your machine
4. Run an "npm install" command in the console. This will install all packages and dependencies that are needed
5. Run an "npm run build" command in the console. This will create the dist folder
6. Run an "npm run start" command in the console. This will start the live dev server and open the project in the browser

## API Instructions
* _To use this API you will require an API key. To get a free or paid key visit [ExchangeRate API](https://www.exchangerate-api.com/) and sign up_
1. Once you have signed up, create a .env file in the top level of the project directory
2. Navigate to your ExchangeRate account and copy your API key
3. Create an API_KEY variable within your .env file. ex: "API_KEY=" 
4. Paste your API key from the ExchangeRate site as the value of this API_KEY variable. ex: "API_KEY=pastedAPIkey"
    * API_KEY is the default variable name used by the program
    * If you want to use a different variable name, change the name in the .env file AND in the src/js/getCurrency.js file

## Known Bugs/Problems

* _Limited Currency options, will be updated to all 160 offered by API in the future_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright &copy; 2021 **_Michael Kriegel_**

## Contact Information

Contact mikkrieg@gmail.com
