var HtmlReporter = require('/usr/local/bin/nightwatch-html-reporter');

var reporter = new HtmlReporter({
	openBrowser: false,
	reportsDirectory: __dirname + '/reports/'
});

module.exports = {
	write : function(results, options, done) {
		reporter.fn(results, done);
	}
};