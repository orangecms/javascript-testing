import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import KittyCard from './KittyCard.jsx';

storiesOf('CaptureView', module)
  .add('Miss Kitty Fantastico', () =>
    <KittyCard kitty={{ name: 'Miss Kitty Fantastico', _id: 123 }} />
  );
