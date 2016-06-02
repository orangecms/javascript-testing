module.exports = {
  toContain: function (util, customEqualityTesters) {
    return {
      compare: (actual, expected) => {
        if (expected === undefined) {
          expected = '';
        }
        let result = {};
        actual.map(item => {
          if (result.pass) return;
          else result.pass = util.equals(item, expected, customEqualityTesters);
        });
        result.message = `Expected ${actual} to contain ${expected}`;
        if (!result.pass) result.message += ' but it was not found 😽';
        return result;
      }
    };
  }
};
