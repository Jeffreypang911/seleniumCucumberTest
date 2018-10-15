module.exports = function () {

  this.BeforeScenario(function(scenario, done) {
    driver.get(page.einsteinLogin.loginUrl);
    done();
  });

  // @login
  this.Given(/^that I am on the login page$/, function () {
    return driver.wait(until.urlIs(page.einsteinLogin.loginUrl), 5000);
  });

  this.When(/^I log in with valid credentials$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000)
    .then(function(){
      return page.einsteinLogin.fillCredentials();
    })
    .then(function() {
      return driver.findElement(page.einsteinLogin.signInForm).click();
    });
  });

  this.Then(/^I should see my email in the top right corner of the page$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.accountEmail), 15000)
    .then(function() {
      return driver.findElement(page.einsteinLogin.accountEmail).getText();
    })
    .then(function(text) {
      // Verify that (correct) email address is displayed
      expect(text).to.equal(page.einsteinLogin.email);
    });
  });


  // @logout
  this.Given(/^that I am logged in$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000)
    .then(function(){
      return page.einsteinLogin.fillCredentials();
    })
    .then(function() {
      driver.findElement(page.einsteinLogin.signInForm).click();
      return driver.wait(until.urlIs(page.einsteinLogin.dashboardUrl), 5000);
    });
  });

  this.When(/^I select sign out from the dropdown menu$/, function () {
    return driver.wait(until.elementLocated(by.id(page.einsteinLogin.signOutButton)), 15000)
    .then(function(element) {
      return helpers.clickHiddenElement('#' + page.einsteinLogin.signOutButton);
    });
  });

  this.Then(/^I should be redirected to the home page$/, function () {
    // Verify that page redirects to correct URL
    return driver.wait(until.urlIs(page.einsteinLogin.homeUrl), 5000);
  });


  // @invalid
  this.When(/^I attempt to log in with an invalid password$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000)
    .then(function(){
      return page.einsteinLogin.fillCredentials('wr0ngp4ssw0rd');
    })
    .then(function() {
      return driver.findElement(page.einsteinLogin.signInForm).click();
    });
  });

  this.Then(/^I should see the error message "([^"]*)"$/, function (msg) {
    const message = driver.findElement(page.einsteinLogin.messagePopup);

    return driver.wait(until.elementIsVisible(message), 15000)
    .then(function(element) {
      return element.getText();
    })
    .then(function(text) {
      // Verify that correct error message is displayed
      expect(text).to.equal(msg);
    });
  });

};

