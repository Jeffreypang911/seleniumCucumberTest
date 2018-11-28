Feature: Trading with Einstein Exchange
  As an Einstein user
  In order to trade currencies
  I want to be able to buy market with available funds


  Background: User is logged in
    Given that I am on the login page
    When I log in with valid credentials
    Then I should see my email in the top right corner of the page

  @insufficientfunds
  Scenario: Not Enough Funds
    Given that I am on the dashboard page
    When I select trade
    When I select buy market
    Then I should see an error message

  @bitcoinpurchase
  Scenario: Sucesful Bitcoin Purchase
    Given that I am on the dashboard page
    When I select trade
    

  