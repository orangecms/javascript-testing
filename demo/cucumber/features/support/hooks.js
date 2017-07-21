const { defineSupportCode } = require('cucumber');
const selenium = require('selenium-standalone');

const nop = () => null;

defineSupportCode(function ({ After, Before }) {
  Before(function(res, callback) {
    selenium.start(function(error, child) {
      if (error) {
        console.error('## Error starting Selenium:', error);
        process.exit(1);
      }
      process.on('exit', () => child.kill());
      child.stdout.on('data', nop);
      child.stderr.on('data', nop);
      callback();
    });
  });

  After(function() {
    console.log('### Shutting down the browser');
    return this.browser.end();
  });
});
