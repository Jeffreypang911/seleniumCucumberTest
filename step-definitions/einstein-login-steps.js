module.exports = function () {

  // @login
  this.Given(/^that I am on the login page$/, function () {
    driver.get(page.einsteinLogin.loginUrl);

    return driver.wait(until.urlIs(page.einsteinLogin.loginUrl), 5000);
  });

  this.When(/^I log in with valid credentials$/, function () {
    return driver.wait(until.elementLocated(by.id('signin-form-sign-in')), 10000)
    .then(function(){
      return page.einsteinLogin.fillCredentials();
    })
    .then(function() {
      return driver.findElement(by.id('signin-form-sign-in')).click();
    });
  });

  this.Then(/^I should see my email in the top right corner of the page$/, function () {
    return driver.wait(until.elementLocated(by.css('div[data-v-6421c8fe].truncate')), 10000)
    .then(function() {
      return driver.findElement(by.css('div[data-v-6421c8fe].truncate')).getText();
    })
    .then(function(text) {
      // Verify that (correct) email address is displayed
      expect(text).to.equal(page.einsteinLogin.email);
    });
  });


  // @logout
  this.Given(/^that I am logged in$/, function () {
    const loginUrl = page.einsteinLogin.loginUrl;
    driver.get(loginUrl);

    return driver.wait(until.elementLocated(by.id('signin-form-sign-in')), 10000)
    .then(function(){
      return page.einsteinLogin.fillCredentials();
    })
    .then(function() {
      driver.findElement(by.id('signin-form-sign-in')).click();
      return driver.wait(until.urlIs(page.einsteinLogin.dashboardUrl), 5000);
    });
  });

  this.When(/^I select sign out from the dropdown menu$/, function () {
    return driver.wait(until.elementLocated(by.id('btn-sign-out')), 10000)
    .then(function(element) {
      return helpers.clickHiddenElement('#btn-sign-out');
    });
  });

  this.Then(/^I should be redirected to the home page$/, function () {
    // Verify that page redirects to correct URL
    return driver.wait(until.urlIs(page.einsteinLogin.homeUrl), 5000);
  });


  // @invalid
  this.When(/^I attempt to log in with an invalid password$/, function () {
    return driver.wait(until.elementLocated(by.id('signin-form-sign-in')), 10000)
    .then(function(){
      return page.einsteinLogin.fillCredentials('wr0ngp4ssw0rd');
    })
    .then(function() {
      return driver.findElement(by.id('signin-form-sign-in')).click();
    });
  });

  this.Then(/^I should see the error message "([^"]*)"$/, function (msg) {
    const message = driver.findElement(by.css('section[toaster] > div[message]'));

    return driver.wait(until.elementIsVisible(message), 10000)
    .then(function(element) {
      return element.getText();
    })
    .then(function(text) {
      // Verify that correct error message is displayed
      expect(text).to.equal(msg);
    });
  });

};

