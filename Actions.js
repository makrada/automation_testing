describe('Actions in JS', function() {

  //handle autocomplete dropdown
  it('Open Posse website',function(){
    browser.get("https://posse.com");
    element(by.model("userInputQuery")).sendKeys("river");
    browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
      browser.sleep(5000);

      expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))).get(0).click(); // clicks the first item in the multiple option menu which has the same name



   })
    //element(by.model("locationQuery")).sendKeys("London");
    //browser.Actions().
  })

})
