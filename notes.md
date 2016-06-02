http://martinfowler.com/bliki/TestPyramid.html
"The test pyramid comes up a lot in Agile testing circles and while its core message is sound, there is much more to say about building a well-balanced test portfolio."

http://mikbe.com/code/testing/dx/2016/03/11/why-and-how-testing-can-make-you-happier.html
"I was once a non-tester, because I didn’t see the value."

https://javascriptair.com/episodes/2016-01-06/
"Testing in JavaScript comes with its own set of challenges."

http://evanhahn.com/how-do-i-jasmine/
"It's pretty cool, but I couldn't find a good tutorial."

http://www.macwright.org/2014/03/11/tape-is-cool.html
"The JavaScript community has grown up with testing culture, and the vast majority of projects use larger tools like Mocha and Jasmine."

https://sites.google.com/site/unclebobconsultingllc/the-truth-about-bdd
"With enough formality, a tool can be (and has been) written that interprets the intent of the requirement and then drives the system under test (SUT) to ensure that the requirement works as stated."

http://g00glen00b.be/unit-testing-meteor-applications-with-velocity-jasmine-and-sinon-js/
"[...] The biggest issue right now is that the documentation is somewhat too basic which makes it hard to set up your tests sometimes [...]."

http://g00glen00b.be/e2e-testing-your-meteor-app-with-cucumber-webdriverio-and-chai/
"E2E testing is pretty neat, but it’s a slow process."

http://info.meteor.com/blog/full-app-testing-in-meteor
"[Meteor] introduces challenges and opportunities for testing that other frameworks typically don’t face."

http://blog.east5th.co/2015/12/21/unit-testing-with-meteor-1.3/
"My ideal testing setup is a neatly mocked, blazingly fast unit test suite backed by a sprinkling of happy-path end-to-end tests as a last bastion against bugs."

http://xolv.io/blog-posts/2015/11/6/the-seven-testing-modes-of-meteor
"My starting point was to understand the different workflows that developers use when writing Meteor code."

https://github.com/xolvio/automated-testing-best-practices
"Please read EVERYTHING, even if you are already a ninja."

me:
"[Testing] causes depression and mitigates regression."


## [TAP](https://testanything.org/) (Test Anything Protocol, originally for PERL)


## [Tape]


## [Mocha]


## [Chai]


## [Jasmine](http://jasmine.github.io/) (testing framework by Pivotal Labs, also for Python and Ruby)
- jasmine (*Spec.js, init, config file nicely hidden in spec/support/jasmine.json where you can provide a spec dir - wtf?)
- jasmine-core (somehow needed because it is not included in Jasmine 2 anymore - or something like that)
- jasmine-expect / jasmine-matchers ?? [GitHub](https://github.com/JamieMason/Jasmine-Matchers)
- jasmine-node (Jasmine + ddescribe and iit, forked from Karma)

[Cheatsheet](http://blog.bandzarewicz.com/blog/2012/03/08/jasmine-cheat-sheet/)
[use with Node.js](http://jasmine.github.io/2.3/node.html)

## [Karma](http://karma-runner.github.io/) (task runner by Google)
Karma is a bit... complicated!

- karma
- karma-requirejs
- karma-jasmine (Aha, Jasmine tests run by Karma...)
- karma-jasmine-matchers (Do you remember jasmine-expect?)
- jasmine-node-karma (Wtf do we have here now, isn't jasmine-node forked from Karma already?)


## [Jest](https://facebook.github.io/jest/) ("PAINLESS JAVASCRIPT UNIT TESTING" by Facebook)
- __tests__ dir - wtf?
- forget CoffeeScript (see nice story on that)


## [Chimp](http://xolv.io/products/chimp) ("EFFORTLESS E2E & ACCEPTANCE TESTING" by Xolv.io)
- live watch mode
- synchronous
- integrates Jasmine, Mocha, Cucumber with Selenium and WebdriverIO
- distributed with Whirlwind


## [AVA](https://github.com/sindresorhus/ava) ()
- AVA, not Ava or ava. Pronounced /ˈeɪvə/ ay-və.
- new, fancy, with a spinner in the command line
- ES2015, Promises, Generators, Async, Observables support
- isolated, atomic, concurrent tests
- Nyan-cat TAP output with  ava --tap | tap-nyan


## [Cucumber]
- Gherkin syntax - Given, When, Then represents an FSM :)
- (Cu)cumbersome
- WebdriverIO, webdriver.js or selenium-webdriver...?

## Now what?

http://xolv.io/products/meteor-testing-manual/
https://www.meteor.com/tutorials/react/testing
https://chimp.readme.io/docs/tutorial
https://www.meteortesting.com/
