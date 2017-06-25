module.exports = {
	url: function () {
		return this.api.launchUrl
	},
	elements: {
		menu: {
			selector: '#menu-item-374'
		},
		username: {
			selector: '#username'
		},
		email: {
			selector: '#email_1'
		},
		marriage: {
			selector: '//*[@value="married"]',
			locateStrategy: 'xpath'
		},
		checkbox: {
			selector: '//input[contains(@value,"cricket") and contains(@type,"checkbox")]',
			locateStrategy: 'xpath'
		}
	},
	commands: [{
		clickMenu: function() {
			return this.waitForElementVisible('@menu', 1000)
	  				.click('@menu');
		},
		isWrapperPresent: function() {
			return this.assert.visible('.pieregformWrapper');
		},
		fillForm:  function() {
			var selector = ['#name_3_firstname', '#name_3_lastname', '#phone_9'];
            var value = ['Gokul', 'Sridharan', '07540579709'];

            for(var i=0; i < selector.length; i++) {

	        	console.log("Number of array "+i);
	 			return this
	 				.setValue(selector[i], value[i]);
	        }
		}
	}]
}