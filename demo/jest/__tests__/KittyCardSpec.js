import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import KittyCard from '../components/KittyCard/KittyCard';

jest.unmock('../components/KittyCard/KittyCard');

// dummy
const kitty = { _id: 123, name: 'Miss Kitty Fantastico' };

describe('KittyCard', () => {
  it('shows the name of the cat', () => {
    const kittyCard = TestUtils.renderIntoDocument(
      <KittyCard kitty={kitty} />
    );
    const renderedKittyCard = ReactDOM.findDOMNode(kittyCard);
    expect(renderedKittyCard.textContent).toMatch(/Miss Kitty Fantastico/);
  });

  it('shows the number of the cat', () => {
    const kittyCard = TestUtils.renderIntoDocument(
      <KittyCard kitty={kitty} />
    );
    const renderedKittyCard = ReactDOM.findDOMNode(kittyCard);
    expect(renderedKittyCard.textContent).toMatch(/is cat #123/);
  });
});
