const wdio = require("webdriverio");
const { defineSupportCode } = require('cucumber');

const config = {
  logLevel: 'command',
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'headless',
        'disable-gpu'
      ]
    }
  }
};

function World() {
  this.browser = wdio.remote(config);

  this.visit = function(url) {
    return this.browser.init().url(url)
    .then(
      () => console.log(`opened: ${url}`)
    )
    .catch(
      (error) => {
        console.error(error);
        process.exit(1);
      }
    );
  };
};

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(World);
});
