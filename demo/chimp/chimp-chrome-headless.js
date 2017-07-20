/**
 * @see https://chimp.readme.io/docs/command-line-options
 * @see https://stackoverflow.com/questions/42303119/selenium-webdriverio-chrome-headless
 *
 * Use --disable-gpu to avoid an error from a missing Mesa
 * library, as per
 * https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
 */

module.exports = {
  webdriverio: {
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [
          'headless',
          'disable-gpu'
        ]
      }
    }
  }
};
