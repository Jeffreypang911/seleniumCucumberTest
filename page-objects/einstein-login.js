require('dotenv').config();


module.exports = {
  email: process.env.EINSTEIN_LOGIN_EMAIL,
  password: process.env.EINSTEIN_LOGIN_PASSWORD,
  
  // New Objects
  baseUrl: 'https://einstein.exchange/',
  dashboardPath: 'dashboard',
  tradePath: 'trade',
  buyPrice: 26,

  BTCtradePath: 'trade?mode=advanced&instrument=BTCUSD',
  ETHtradePath: 'trade?mode=advanced&instrument=ETHUSD',
  LTCtradePath: 'trade?mode=advanced&instrument=LTCUSD',
  DASHtradePath: 'trade?mode=advanced&instrument=DASHUSD',

  tradeButton: by.id('btn-trade'),
  purchaseButton: by.id('btn-buy-coin'),
  purchaseError: by.css('div[main] > section[data-v-02c80a04] > div[data-v-02c80a04] > span[red]'),
  purchaseSucess: by.css('section[data-v-02c80a04] > div[data-v-02c80a04]'),
  buyAmountField: by.css('#input-market-buy-price > input'),

  // Fills in purchase amount on trade page
  fillPurchaseAmount: function (buyPrice = this.buyPrice) {
    driver.findElement(this.buyAmountField).sendKeys("Control-a, backspace")
    return driver.findElement(this.buyAmountField).sendKeys(buyPrice);
  },

  // Given Objects
  signInButton: by.css('#btn-signin > button[data-v-908e2d22]'),
  signInForm: by.css('div[login]'),
  emailField: by.id('username'),
  passwordField: by.id('password'),
  signInSubmit: by.id('kc-login'),
  accountEmail: by.css('div[data-v-f4d357ae].truncate'),
  signOutButton: 'btn-sign-out',
  messagePopup: by.css('div[toaster-component] > span.kc-feedback-text'),

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