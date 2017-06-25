const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const registerPage = client.page.register();

defineSupportCode(({Given, Then, When, setDefaultTimeout}) => {

	setDefaultTimeout(60 * 1000);

	Given('I am on the site', function () {
         return registerPage.navigate()
         		.clickMenu()
         		.isWrapperPresent()
    });

    When('I fill in the registration form', function () {
          return registerPage.fillForm()
    });

    // Then('I should be able to successfully register', function (callback) {
    //      // Write code here that turns the phrase above into concrete actions
    //      callback(null, 'pending');
    // });


});