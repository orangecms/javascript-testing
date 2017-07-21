/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { Meteor } from 'meteor/meteor';
import 'jest-meteor-mocks';
import foo from '../foo';
/*
jest.mock('meteor/meteor');
jest.unmock('meteor/meteor');
jest.setMock('meteor/meteor', { Meteor: {} });
*/

console.log(Meteor);

describe('asdf', () => {
  it('asdf', () => {
    const bar = foo();
    console.log(bar);
    expect(typeof bar).toEqual('boolean');
    expect(bar).toEqual(true);
  });
});
