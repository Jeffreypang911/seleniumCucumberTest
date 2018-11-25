const baseUrl = page.einsteinLogin.baseUrl;

module.exports = function () {

  this.BeforeScenario(function(scenario) {
    return driver.get(baseUrl).then(function() {
      return driver.wait(until.elementLocated(page.einsteinLogin.signInButton)).then(function(button) {
        return button.click();
      });
    });
  });

  // @login
  this.Given(/^that I am on the login page$/, function() {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000);
  });

  this.When(/^I log in with valid credentials$/, function() {
    return page.einsteinLogin.fillCredentials().then(function() {
        return driver.findElement(page.einsteinLogin.signInSubmit).click();
      }).then(function() {
        return driver.wait(until.urlIs(baseUrl + page.einsteinLogin.dashboardPath), 5000);
      });
  });

  this.Then(/^I should see my email in the top right corner of the page$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.accountEmail), 15000)
    .then(function(email) {
      return email.getText();
    })
    .then(function(text) {
      // Verify that (correct) email address is displayed
      expect(text).to.equal(page.einsteinLogin.email.toLowerCase());
    });
  });


  // @logout
  this.Given(/^that I am logged in$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000)
    .then(function(){
      return page.einsteinLogin.fillCredentials();
    })
    .then(function() {
      return driver.findElement(page.einsteinLogin.signInSubmit).click();
    })
    .then(function() {
        return driver.wait(until.urlIs(baseUrl + page.einsteinLogin.dashboardPath), 5000);    
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
    return driver.wait(until.urlIs(baseUrl), 15000);
  });


  // @invalid
  this.When(/^I attempt to log in with an invalid password$/, function () {
    return driver.wait(until.elementLocated(page.einsteinLogin.signInForm), 15000)
    .then(function(){
      return page.einsteinLogin.fillCredentials('wr0ngp4ssw0rd');
    })
    .then(function() {
      return driver.findElement(page.einsteinLogin.signInSubmit).click();
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

