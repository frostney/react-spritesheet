import React, { PropTypes, Component } from 'react';

import Sprite from './Sprite';

class AnimatedSpriteSheet extends Component {
  static propTypes = {
    initialFrame: PropTypes.number,
    frameWidth: PropTypes.number,
    frameHeight: PropTypes.number,
    isPlaying: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      frame: props.initialFrame,
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const spriteData = {
      width: this.props.frameWidth,
      height: this.props.frameHeight,
    };

    return <Sprite {...spriteData} />;
  }
}

export default AnimatedSpriteSheet;
