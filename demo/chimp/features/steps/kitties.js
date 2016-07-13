const assert = require('assert');

const logdir = process.env.LOG_DIR;

module.exports = function () {
  let kitties;
  this.Given(/^I open the main site$/, function () { 
    browser.url('http://localhost:3000');
  });

  this.When(/^I add a kitty named Moni$/, function () {
    server.call('Kitties.add', 'Moni');
  });

  this.When(/^I count the cat pics$/, function () {
    browser.waitForExist('div[id="app"]');
    browser.waitForExist('ul');
    browser.saveScreenshot(logdir + 'kitties.png');
    kitties = browser.elements('li').value;
  });

  this.Then(/^there should be (\d+)$/, function (count) {
    assert.equal(count, kitties.length);
  });
}
