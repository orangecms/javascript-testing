## About
These are slides for a talk on obstacles encountered when testing JavaScript.

I highly recommend reading the book
[Maintainable JavaScript](http://shop.oreilly.com/product/0636920025245.do)
by Nicholas Zakas.

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
Demos are in `demo/*/` respectively.

To run them, in either directory run `npm install && npm test`.

If everything works, I'm happy. If something doesn't, please reach out to me,
because that's why I'm doing this! 🐢

#### Known issues
For the Chimp tests, it can happen that processes remain that you need to kill
manually.
