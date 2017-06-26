@register
Feature: Registeration form
   As a user
   I want to be able to register on the site
   So that I can login to the site

   Scenario: Register a user
     Given I am on the site
     When I fill in the registration form
     Then I should be able to successfully register

   Scenario Outline: Verify tabs are loaded
     When I click on '<tabs>'
     Then respective tab '<contents>' should be loaded

     Examples:
        | tabs    |   contents       |
        | ui-id-1 |  Content 1 Title |
        | ui-id-2 |  Content 2 Title |
        | ui-id-3 |  Content 3 Title |
        | ui-id-4 |  Content 4 Title |
        | ui-id-5 |  Content 5 Title |
