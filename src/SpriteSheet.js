import React, { PropTypes } from 'react';

import Sprite from './Sprite';

const SpriteSheet = ({ filename, data, sprite }) => {
  if (!filename || !data || !sprite) {
    return null;
  }

  const currentSprite = data[sprite];

  const spriteData = { ...currentSprite, filename };

  return <Sprite {...spriteData} />;
};

SpriteSheet.propTypes = {
  filename: PropTypes.string,
  sprite: PropTypes.string,
  data: PropTypes.object,
};

export default SpriteSheet;
