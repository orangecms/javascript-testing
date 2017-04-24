/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount as renderFull, shallow as renderShallow } from 'enzyme';
import KittyCard from '../components/KittyCard/KittyCard';

jest.unmock('../components/KittyCard/KittyCard');

// dummy
const kitty = { _id: 123, name: 'Miss Kitty Fantastico' };

describe('KittyCard', () => {
  it('renders correctly', () => {
    const kittyCard = renderer.create(
      <KittyCard kitty={kitty} />
    ).toJSON();
    expect(kittyCard).toMatchSnapshot();
  });

  it('shows the name of the cat', () => {
    const kittyCard = renderShallow(
      <KittyCard kitty={kitty} />
    );
    expect(kittyCard.text()).toMatch(/Miss Kitty Fantastico/);
  });

  it('shows the number of the cat', () => {
    const kittyCard = renderFull(
      <KittyCard kitty={kitty} />
    );
    expect(kittyCard.text()).toMatch(/is cat #123/);
  });
});
