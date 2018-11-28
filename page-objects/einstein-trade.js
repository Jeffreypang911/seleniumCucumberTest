require('dotenv').config();

module.exports = {

  baseUrl: 'https://einstein.exchange/dashboard',
  tradePath: 'trade',

  email: process.env.EINSTEIN_LOGIN_EMAIL,
  password: process.env.EINSTEIN_LOGIN_PASSWORD,

  // TODO: HTML IDs for accountEmail & messagePopup
  tradeButton: by.css('#btn-trade > button[data-v-f4d357ae]'),
  
  // Fills in email and password fields
  fillCredentials: function (password = this.password) {
    driver.findElement(this.emailField).sendKeys(this.email);

    return driver.findElement(this.passwordField).sendKeys(password);
  },
  // submitSignInForm: function() {
  //   // return driver.findElement(this.signInSubmit).click();
  //   // return driver.wait(until.elementLocated(this.signInSubmit), 15000).then(function(button) {
  //   //   button.click();
  //   // });
  // }
};