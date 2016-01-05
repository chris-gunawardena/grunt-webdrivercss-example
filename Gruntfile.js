module.exports = function(grunt) {

	grunt.initConfig({
		webdriver: {
			test: {
				configFile: './wdio.conf.js'
			}
		},
	    'selenium_standalone': {
	        serverConfig: {
	            seleniumVersion: '2.48.2',
	            seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
	            drivers: {
	                chrome: {
	                  version: '2.20',
	                  arch: process.arch,
	                  baseURL: 'http://chromedriver.storage.googleapis.com'
	                }
	            }
	        }
	    }
	})

	grunt.registerTask('test', 'Run visual regression tests.', ['selenium_standalone:serverConfig:install', 'selenium_standalone:serverConfig:start', 'webdriver'	]);

	grunt.loadNpmTasks('grunt-webdriver');
	grunt.loadNpmTasks('grunt-selenium-standalone');
};

