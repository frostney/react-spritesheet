import React, { PropTypes } from 'react';

const Sprite = ({ filename, x, y, width, height }) => {
  if (!filename) {
    return null;
  }

  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    width,
    height,
  };

  return <div style={style} />;
};

Sprite.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

Sprite.propTypes = {
  filename: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Sprite;
