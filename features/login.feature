Feature: Login functionality

  Scenario: Login with valid credentials
    Given I open the login page
    When I enter username "Admin" and password "admin123"
    And I click the login button
    Then I should see the dashboard page
