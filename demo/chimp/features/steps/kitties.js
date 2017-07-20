const assert = require('assert');

module.exports = function () {
  this.Given(/^I open (.*)$/, function (url) {
    browser.url(url);
  });

  this.When(/^I add a kitty named Moni$/, function () {
    // TODO: deploy app with form and use it here
    // server.call('Kitties.add', 'Moni');
  });

  this.Then(/^there should be (\d+) cats$/, function (count) {
    const kitties = browser.elements('li').value;
    assert.equal(count, kitties.length);
  });
}
