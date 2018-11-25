require('dotenv').config();

module.exports = {

  baseUrl: 'https://einstein.exchange/',
  dashboardPath: 'dashboard',

  email: process.env.EINSTEIN_LOGIN_EMAIL,
  password: process.env.EINSTEIN_LOGIN_PASSWORD,

  // TODO: HTML IDs for accountEmail & messagePopup
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