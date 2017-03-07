module.exports = function(grunt) {

	grunt.initConfig({
		webdriver: {
			test: {
				configFile: 'wdio.conf.js'
			}
		},
	    'selenium_standalone': {
	        serverConfig: {
	            seleniumVersion: '3.2.0',
	            seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
	            drivers: {
                    // http://chromedriver.storage.googleapis.com/
	                chrome: {
	                  version: '2.27'
	                },
                    // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
	                edge: {
	                  version: '3.14393'
	                },
                    // https://github.com/mozilla/geckodriver/releases
	                firefox: {
	                  version: '0.14.0'
	                },
                    // https://selenium-release.storage.googleapis.com/
                    ie: {
                      version: '3.0.0',
                      arch: 'ia32'
                    },
                    // https://github.com/operasoftware/operachromiumdriver/releases
	                opera: {
	                  version: '0.2.2'
	                },
                    // https://bitbucket.org/ariya/phantomjs/downloads/
	                phantomjs: {
	                  version: '2.1.1'
	                },
                    // https://selenium-release.storage.googleapis.com/
                    safari: {
                      version: '2.48'
                    }
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-webdriver');
	grunt.loadNpmTasks('grunt-selenium-standalone');

	grunt.registerTask('test', 'Run visual regression tests.', [
		'selenium_standalone:serverConfig:install', 
		'selenium_standalone:serverConfig:start', 
		'webdriver', 
		'selenium_standalone:serverConfig:stop'
	]);

};

