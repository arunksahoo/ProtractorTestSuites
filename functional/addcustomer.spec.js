
// Reading log files from log.js
var logger = require('../util/log');

describe("Test Automation of a banking app",function(){

    it("validate customer login test",function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        logger.log('info','Navigating to the Website');
        element(by.buttonText("Customer Login")).click();
        logger.log('info','Function: Executing Add Customer test');

    });
});