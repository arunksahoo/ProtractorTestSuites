
// Reading log files from log.js
var logger = require('../util/log');
describe("Test Automation of a banking app",function(){

    // If user not want to execute the test cases then we can use "x" in it() blocks
    xit("validate customer login test",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        logger.log('info','Navigating to the Website');
        element(by.buttonText("Customer Login")).click();
        console.log("Function: Executing login test");

    });

    it("validate title test",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        logger.log('info','Navigating to the Website');
        element(by.buttonText("Customer Login")).click();
        console.log("Function: Executing title test");
        });
});