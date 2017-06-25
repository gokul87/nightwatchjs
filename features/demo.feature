Feature: Registeration form
   As a user
   I want to be able to register on the site
   So that I can login to the site

   Scenario: Register a user
     Given I am on the site
     When I fill in the registration form
     Then I should be able to successfully register

