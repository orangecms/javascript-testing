/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import 'jasmine-expect';
import nock from 'nock';
import fs from 'fs';
import path from 'path';
import loadKitty, { transform } from '../lib/kittyLoader';

jest.unmock('../lib/kittyLoader');
const dummyKitty = fs.readFileSync(
  path.resolve(__dirname, 'dummies', 'dummyKitty.xml')
).toString();

describe('load kitty', () => {
  describe('transform', () => {
    it('should take a simple object out of a response', (done) => {
      transform(dummyKitty).then((kitty) => {
        expect(kitty._id).toBeString();
        expect(kitty.url).toMatch(/^http:\/\//);
        done();
      });
    });
  });

  describe('loader', () => {
    beforeEach(() => {
      nock('http://thecatapi.com/api')
        .get(/\/images\/get(\?format=(xml|html|src))?/)
        .reply(200, dummyKitty);
    });

    it('should fetch XML and transform it into a kitty object', (done) => {
      loadKitty().then((kitty) => {
        expect(kitty._id).toBeString();
        expect(kitty.url).toMatch(/^http:\/\//);
        done();
      });
    });
  });
});
