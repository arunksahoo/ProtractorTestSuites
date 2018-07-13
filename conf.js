var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');

exports.config = {


    seleniumAddress: 'http://localhost:4444/wd/hub/',

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		browserName: 'chrome'
	}],


	framework: 'jasmine2',



	specs: ['./logger/TestMatchers.js'],

	suites: {

			smoke: ['./smoke/*.spec.js'],
			regression: ['./regression/*.spec.js'],
			functional: ['./functional/*.spec.js'],
			all: ['./!*!/!*.spec.js'],
			selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],


	},

    onPrepare: function () {
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: './Reports/Extent_Report',
            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
                // Example: '30-12-2016/firefox/list-should work'.
                var currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear();

                var validDescriptions = descriptions.map(function (description) {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year,
                    // capabilities.get('browserName'),
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './Reports/Html-Reports',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    },

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}


}