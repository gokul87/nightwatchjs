module.exports = {

	'sorting test': function(browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('#menu-item-151', 1000)
			.click('#menu-item-151', function() {
				this.waitForElementVisible('.ui-tabs-nav', 1000);
			})
			.end();



	}
}