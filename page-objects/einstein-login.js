module.exports = {

  homeUrl: 'https://einstein.exchange/',
  loginUrl: 'https://einstein.exchange/signin',

  email: 'email@email.com',
  password: 'password',

  emailField: by.css('#login-email > input'),
  passwordField: by.css('#login-password > input'),

  // Fills in email and password fields
  fillCredentials: function (password = this.password) {

    driver.findElement(this.emailField).sendKeys(this.email);

    return driver.findElement(this.passwordField).sendKeys(password);
  }
};