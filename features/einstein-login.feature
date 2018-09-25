Feature: Logging in to Einstein Exchange
  As an Einstein user
  In order to access my account information
  I want to be able to log in to my account

  @login
  Scenario: Successful login
    Given that I am on the login page
    When I log in with valid credentials
    Then I should see my email in the top right corner of the page

  @logout
  Scenario: Log out from dashboard
    Given that I am logged in
    When I select sign out from the dropdown menu
    Then I should be redirected to the home page

  @invalid
  Scenario: Unsuccessful login
    Given that I am on the login page
    When I attempt to log in with an invalid password
    Then I should see the error message "Wrong username or password."