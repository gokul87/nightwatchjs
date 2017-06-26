const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Before, After}) => {
    Before(function (scenario) {
        console.log('Test Starts here');
        return client.init();
    });

    After(function (scenario) {
        console.log('Test Ends here');
    });
})