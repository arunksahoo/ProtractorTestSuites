/**
 * Created by Selenium on 11-03-2016.
 */
var base = require('../pages/BasePage.js');
describe("BankManager Login Test",function(){


    var home_page = require('../pages/HomePage.js');
   it("Login as Bank Manager",function(){

       browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
       var customer = home_page.loginAsBankManager();
       customer.gotoAddCustomer().addCustomerInfo("Raman","Arora","A1343df");
       var title = base.getPageTitle();
       expect(title).toBe("Protractor practice website - Banking App");
       browser.sleep(3000);

   }) ;


});
