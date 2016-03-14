import React, { PropTypes } from 'react';

const Sprite = ({ filename, x, y, width, height }) => {
  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    width,
    height,
  };

  return <div style={style} />;
};

Sprite.propTypes = {
  filename: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Sprite;
