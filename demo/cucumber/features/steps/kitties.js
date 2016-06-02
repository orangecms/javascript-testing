assert = require('assert');

module.exports = function() {
  let kitties;

  this.World = require('../support/world.js');

  this.Given(/^I open the main site$/, function (cb) {
     this.visit('http://localhost:3000/', cb);
     //this.visit('https://metaspora.org/meteor-react-testing/', cb);
   });

   this.When(/^I count the cat pics$/, function (cb) {
     this.browser.elements('img')
       .then(function ({ value }) {
         console.log('kitties', value);
         kitties = value;
         cb();
       });
   });

   this.Then(/^there should be (\d+)$/, function (count) {
     assert.equal(kitties.length, count);
     assert.equal(kitties.length, parseInt(count));
   });
};
