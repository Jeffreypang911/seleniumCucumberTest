'use strict';

var chromedriver = require('chromedriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function() {

    var driver = new selenium.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
            args: ['start-maximized', 'disable-extensions'/*, 'auto-open-devtools-for-tabs'*/]
        },
        path: chromedriver.path
    }).build();
    // usingServer("http://" + "XXX" + ":" + "YYY" +
    //           "@ondemand.saucelabs.com:80/wd/hub").
    

    // driver.manage().window().maximize();

    return driver;
};