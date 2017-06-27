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
	 			 var cmd = this.setValue(selector[i], value[i], function() {
	 			 	console.log('form succesfully filled');
	 			 })
				 //.waitForElementVisible('#menu-item-144', 5000);

				
	        }
	        return cmd;
		},
		generateEmail: function() {

			return this.setValue('@username', 'test '+Math.floor((Math.random() * 1000) + 1))
			   	   .setValue('@email', 'test'+Math.floor((Math.random() * 1000) + 1)+'@test.com')
			   	   .click('@marriage')
			   	   .click('@checkbox');
		},
		chooseDropDowns: function() {

			return this.click('#dropdown_7', function() {
					this.waitForElementVisible('#dropdown_7 option[value="India"]', 3000)
						.click('#dropdown_7 option[value="India"]');
			});
		},
		passwordProtector: function() {

			var text = 'Te$ting2017';

			var action = this.setValue('#password_2', text)
		  		   .click('#page');

		  		   if(text.length < 8) {
			  		   	this.assert.elementPresent('.legend_txt .legend.error')
			  		   		.assert
			  		   		.containsText('.legend_txt .legend.error', '* Minimum 8 characters required')
		  		   } else {
		  		   		this
							.setValue('#confirm_password_password_2', text)
		  		   }
		  	return action;
		},
		verifyFormSubmit: function() {
			return this.click('.fieldset.piereg_submit_button>input', function() {
								this.waitForElementVisible('.piereg_message', 6000)
							})
		}
	}]
}