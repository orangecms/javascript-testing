module.exports = {
  'Demo test' : function (browser) {
    browser.url('https://metaspora.org/meteor-react-testing');
    browser.expect.element('img').to.be.present;
    browser.end();
  }
};
