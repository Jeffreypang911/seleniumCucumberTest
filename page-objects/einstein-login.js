require('dotenv').config()

module.exports = {

  homeUrl: 'https://einstein.exchange/',
  loginUrl: 'https://einstein.exchange/signin',
  dashboardUrl: 'https://einstein.exchange/dashboard',

  email: process.env.EINSTEIN_LOGIN_EMAIL,
  password: process.env.EINSTEIN_LOGIN_PASSWORD,

  // TODO: HTML IDs for accountEmail & messagePopup
  signInForm: by.id('signin-form-sign-in'),
  emailField: by.css('#login-email > input'),
  passwordField: by.css('#login-password > input'),
  accountEmail: by.css('div[data-v-6421c8fe].truncate'),
  signOutButton: 'btn-sign-out',
  messagePopup: by.css('section[toaster] > div[message]'),

  // Fills in email and password fields
  fillCredentials: function (password = this.password) {

    driver.findElement(this.emailField).sendKeys(this.email);

    return driver.findElement(this.passwordField).sendKeys(password);
  }
};