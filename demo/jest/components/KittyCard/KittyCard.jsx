import React, { Component, PropTypes } from 'react';

import { kittyEmoji } from 'emoji-generator';

export default class KittyCard extends Component {
  getEmoji() {
    return kittyEmoji.next().value;
  }

  /**
   * show a kitty with a name and a picture
   */
  render() {
    const { _id, name } = this.props.kitty;
    return (
      <figure>
        <img src={`http://thecatapi.com/api/image/get?meow=${_id}`} />
        <figcaption>
          { name } { this.getEmoji() }
        </figcaption>
      </figure>
    )
  }
}

KittyCard.propTypes = {
  kitty: PropTypes.object.isRequired,
};
