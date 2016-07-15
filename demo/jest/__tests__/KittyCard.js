jest.unmock('../components/KittyCard/KittyCard');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import KittyCard from '../components/KittyCard/KittyCard';

describe('KittyCard', () => {
  it('shows the name of the cat', () => {
    const kitty = { id: 123, name: 'Miss Kitty Fantastico' };
    const kittyCard = TestUtils.renderIntoDocument(
      <KittyCard kitty={kitty} />
    );
    const renderedKittyCard = ReactDOM.findDOMNode(kittyCard);
    expect(renderedKittyCard.textContent).toMatch(/Miss Kitty Fantastico/);
  });
});
