'use strict';

const assert = require('assert');
const inArrayMatcher = require('./support/inArrayMatcher.js');
const { kittyEmoji } = require('emoji-generator');
const catfaces = [ '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀' ];

describe('I like cats', () => {
  beforeEach(function() {
    jasmine.addMatchers(inArrayMatcher);
  });

  it('should give me a cat face emoji', function(done) {
    let emoji = kittyEmoji.next().value;
    expect(catfaces).toContain(emoji);
    done();
  });

  it('should give me another cat face emoji', function(done) {
    let emoji = kittyEmoji.next().value;
    expect(catfaces).toContain(emoji);
    done();
  });

  it('should always give me a cat face emoji', function(done) {
    let emoji;
    for (let i=0; i<100; i++) {
      emoji = kittyEmoji.next().value;
      expect(catfaces).toContain(emoji);
    };
    done();
  });
});
