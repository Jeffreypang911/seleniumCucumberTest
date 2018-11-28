Feature: Trading with Einstein Exchange
  As an Einstein user
  In order to trade currencies
  I want to be able to buy market with available funds

  Background: User is logged in
    Given that I am on the login page
    When I log in with valid credentials
    Then I should see my email in the top right corner of the page
    Given that I am on the home page
    When I select trade tab
    Then I should be redirected to the trade page
 
  @insufficientfunds
  Scenario: Not Enough Funds
    Given that I am on the trade page
    When I select buy market for price higher than balance
    Then I should see an error message

  @bitcoinpurchase
  Scenario: Sucessful Bitcoin Purchase
    Given that I am on the trade page
    When I purchase bitcoin
    Then I should see purchase notification
  
  @bitcoinsell
  Scenario: Sucessful Bitcoin Sell
    Given that I am on the trade page
    When I sell bitcoin
    Then I should see sell notification

  @ethereumpurchase
    Scenario: Sucessful Ethereum Purchase
    Given that I am on the trade page
    When I purchase ethereum
    Then I should see purchase notification

  @litecoinpurchase
    Scenario: Sucessful Litecoin Purchase
    Given that I am on the trade page
    When I purchase litecoin
    Then I should see purchase notification

  @dashcoinpurchase
    Scenario: Sucessful Dashcoin Purchase
    Given that I am on the trade page
    When I purchase dashcoin
    Then I should see purchase notification
    

  