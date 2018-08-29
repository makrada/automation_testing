var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //geckoDriver:'usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.20.1',
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['pageObj.js'],

   capabilities:{
     'browserName': 'firefox',
     'moz:firefoxOptions':{'args':["--safe-mode"]}
   },

   directConnect: true,

   jasmineNodeOpts:{
      showColors:true
   },

   suites:{
     smoke:'Maths.js'
   },

   onPrepare:function(){ // will be executed before all the above
      browser.driver.manage().window().maximize();

      // this is added to extract screenshots of the test cases
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './screenshots'
        })
      );
   }

};
