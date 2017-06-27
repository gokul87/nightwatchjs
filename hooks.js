const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Before, After}) => {
    Before('@start', function () {
        console.log('Test Starts here');
        return client.init();
    });

    After('@end', function () {
        console.log('Test Ends here');
    });
})