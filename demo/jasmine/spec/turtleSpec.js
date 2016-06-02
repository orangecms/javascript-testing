'use strict';

const assert = require('assert');
const { turtleEmoji } = require('emoji-generator');

describe('I like turtles', () => {
  it('should give me a turtle emoji', function(done) {
    assert.equal(turtleEmoji.next().value, '🐢');
    done();
  });
});
