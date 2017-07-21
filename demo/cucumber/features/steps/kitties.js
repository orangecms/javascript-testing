const assert = require('assert');
const { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {
  Given(/^I open the main site$/, function() {
     return this.visit('https://metaspora.org/meteor-react-testing/');
   });

  When('I hit reset', function() {
    const resetButton = 'header > button';
    return this.browser.waitForExist(resetButton)
    .then(
      () => this.browser.click(resetButton)
    );
  });

  Then(/^there should be (\d+) cats$/, function (count) {
    return this.browser.waitForExist('img')
    .then(
      () => this.browser.elements('img')
    )
    .then(
      ({ value: kitties }) => {
        assert.equal(kitties.length, count);
      }
    );
  });
});
