# Protractor 

## SetUp of Protractor :
               1. Download node.js and check node vesrsion,npm version
               2. Use npm to install Protractor globally with:
                     npm install -g protractor
               3. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.
                   webdriver-manager update
               4 . Now start up a server with:
                      webdriver-manager start
##   Example: 
```
 Protractor Set up and Example : 
     https://www.protractortest.org/#/

  1. describe('Enter GURU99 Name', function() {
 it('should add a Name as GURU99', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('GURU99');
  var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello GURU99!');
  });
});         
  
### Code Explanation of spec.js:

1.describe('Enter GURU99 Name', function()
The describe syntax is from the Jasmine framework. Here "describe" ('Enter GURU99 Name') typically defines components of an application, which can be a class or function etc. In the code suite called as "Enter GURU99," it's just a string and not a code.

2.it('should add a Name as GURU99', function()

3.browser.get('https://angularjs.org')
As like in Selenium Webdriver browser.get will open a new browser instance with mentioned URL.

4.element(by.model('yourName')).sendKeys('GURU99')
Here we are finding the web element using the Model name as "yourName," which is the value of "ng-model" on the web page.

5. var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'))
Here we are finding the web element using XPath and store its value in a variable "guru".

6. expect(guru.getText()).toEqual('Hello GURU99!')
Finally we are verifying the text which we have got from the webpage (using gettext() ) with expected text .

##   Command Promt For suites : 

 1. Go to the folder 
 2.cmd -   Protractor conf.js --suite nameofsuite
     note "nameofsuite" - we have to give file what we want to execute.
 3. If we want skip the testCase :
     Example :
     
     xit('Test case3 ', function () {
     
         });
     Note : we have to write "x" in the testcase starting. 
     
 ## Generate HTML report from Allure results
    The Reporter will generate xml files inside of a resultsDir, then we need to generate HTML out of them. You can use Maven for that. Copy ready-to-use pom.xml from node_modules/jasmine-allure-reporter and run:
    
    mvn site -Dallure.results_pattern=allure-results
    
    It will put HTMLs into target/site/allure-maven-plugin folder. To serve them via localhost:1324 use:
    
    mvn jetty:run -Djetty.port=1234       
``

```
