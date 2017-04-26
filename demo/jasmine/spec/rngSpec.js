require('jasmine-expect');

const rng = require('..');

describe('rng', () => {
  it('should return a number', () => {
    const random1 = rng();
    expect(random1).toBeNumber();
  });

  it('should return a random number', () => {
    const random1 = rng();
    const random2 = rng();
    expect(random1).not.toEqual(random2);
  });
});
