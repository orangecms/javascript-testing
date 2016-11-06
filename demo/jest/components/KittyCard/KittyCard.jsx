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
    // TODO: add a button that reveals extra text
    const { _id, name } = this.props.kitty;
    const style = {
      border: '5px solid purple',
      padding: 10, margin: 5,
      font: 'bold 24pt Roboto-Regular, sans-serif',
    };
    return (
      <figure style={style}>
        <img src={`http://thecatapi.com/api/image/get?meow=${_id}`} />
        <figcaption>
          { name } is cat #{ _id } { this.getEmoji() }
        </figcaption>
      </figure>
    )
  }
}

KittyCard.propTypes = {
  kitty: PropTypes.object.isRequired,
};
