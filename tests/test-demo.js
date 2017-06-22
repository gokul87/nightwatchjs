module.exports = {

    '@tags': ['basic'],
	before : function(browser) {
		console.log('Setting up test suite...');
	},

	after : function(browser) {
		console.log('Closing down test suite...');
	},


	'Demo test' : function (browser) {

	  var pom = browser.page.pom();

	  pom.navigate()
	  	//.url(browser.launchUrl)
	  	.waitForElementVisible('@menu', 1000)
	  	.click('@menu');
	  	browser
	  	  .pause(1000);
		  browser.expect.element('.pieregformWrap').to.be.present.before(5000);
	},

	'Registration page' : function (browser) {
        var selector = ['#name_3_firstname', '#name_3_lastname', '#phone_9'];
        var value = [browser.globals.firstname, browser.globals.lastname, browser.globals.mobile];

        for(var i=0; i < selector.length; i++) {

        	console.log("Number of array "+i);
 			browser
 				.setValue(selector[i], value[i]);
        }

        var generateRandom = browser.page.pom();
        generateRandom.number();


        generateRandom
        	.click('@marriage')
        	.click('@checkbox');

        browser
		  .useCss()
		  .click('#dropdown_7')
		  .pause(1000)
		  .click('#dropdown_7 option[value="India"]')
		  .setValue('input#profile_pic_10', './../file/sample.txt')
		  .pause(3000);
	},

	'Password protector' : function (browser) {
		
		var text = 'Te$ting2017';

        
		browser
		  .setValue('#password_2', text)
		  .click('#page');

		if(text.length < 8) {
			browser.expect.element('.legend_txt .legend.error').to.be.present;
			browser.expect.element('.legend_txt .legend.error').text.to.be.equal('* Minimum 8 characters required');
		} else {
			browser
			  .setValue('#confirm_password_password_2', text)
			  .pause(3000)
			  .useXpath()
			  .click('//input[@name="pie_submit"]')
			  .pause(2000);
		}

		browser.end();

	}
};