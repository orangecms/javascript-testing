const World = module.exports = function() {
  const browser = require("webdriverio").remote({
    logLevel: 'command',
    desiredCapabilities: {
      browserName: 'phantomjs'
    }
  });

  this.browser = browser;

  this.visit = function (url, callback) {
    this.browser
      .init()
      .url(url)
      .then(() => {
        console.log(`opened: ${url}`);
        callback();
      });
  };
};
