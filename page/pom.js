var random = {
	number: function() {
		return this.setValue('@username', 'test '+Math.floor((Math.random() * 100) + 1))
			   	   .setValue('@email', 'test'+Math.floor((Math.random() * 100) + 1)+'@test.com');
	}
};

module.exports = {
    url: function() {
    	return this.api.launchUrl;
    },
    commands: [random],
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
	}	
};