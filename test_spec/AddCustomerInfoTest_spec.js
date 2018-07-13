
var add_customer = require('../pages/AddCustomerDetails.js');
var homepage = require('../pages/HomePage.js');
describe("Customer information Test",function(){



    it("Adding Customer Information",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        homepage.loginAsBankManager();
        browser.sleep(3000);
        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Raman","Arora","A1343df");

    });

    var add_customer = require('../pages/AddCustomerDetails.js');

    it("Open Account",function(){


        add_customer.gotoOpenAccount();
        add_customer.openAccount("Raman Arora","Rupee");

    }) ;


});
