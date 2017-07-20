const assert = require('assert');

module.exports = function () {
  this.Given(/^I open (.*)$/, function (url) {
    client.url(url);
    const resetButton = 'header > button';
    client.waitForExist(resetButton);
    client.click(resetButton);
  });

  this.When(/^I add a kitty named (.+)/, function (name) {
    client.waitForExist('form');
    client.setValue('input', name);
    client.submitForm('form');
    client.pause(1000); // give it some time
  });

  this.Then(/^there should be (\d+) cats$/, function (count) {
    client.waitForExist('li');
    client.pause(500); // querying the DOM can be faster than rendering -.-
    const kitties = client.elements('li').value;
    assert.equal(kitties.length, count);
  });
}
