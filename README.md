## About

These are slides for a talk on obstacles encountered when testing JavaScript.

## Installation

You will need Node.js, npm, Bower, and Gulp.

### Run the slides

Sources are in `src/`.

To build the project:

```bash
(cd src && bower install)
```

To get it on a local webserver:
```bash
npm install && gulp
```

The app will be running on `http://localhost:8012`.

### Demos

Demos are in `demo/jasmine/` and `demo/cucumber/` respectively.

To be able to run them, in either directory run `npm install`.

For the `cucumber` tests, you will need `phantomjs` and `selenium-start` installed and available in your `$PATH`.
Then execute the script: `./run-tests`

For `jasmine`, just run `./node_modules/.bin/jasmine`.

If it works, I'm happy. If something doesn't, please reach out to me, because that's why I'm doing this! 🐢
