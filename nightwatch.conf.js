'use strict';

const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
	cucumberArgs: [
        '--require', 'hooks.js',
		'--require', 'features/step_definitions',
		'--format', 'pretty',
		'--format', 'json:reports/cucumber.json',
		'features'
	]
});

module.exports = {
	test_workers: {
        enabled: false,
        workers: 'auto'
    },
	output_folder: 'reports',
    custom_commands_path: 'custom-commands',
    custom_assertions_path: '',
    page_objects_path: 'page',
    live_output: true,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        selenium_host: 'localhost',
        selenium_port: 5555,
        silent: true,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
            "webdriver.gecko.driver": geckodriver.path
        }
    },
    test_settings: {
    default: {
      launch_url: 'http://demoqa.com',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },
    chrome: {
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true,
        }
    },
    firefox: {
        desiredCapabilities: {
          browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
    }
	}
};