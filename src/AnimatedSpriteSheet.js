import React, { PropTypes, Component } from 'react';

import Sprite from './Sprite';

class AnimatedSpriteSheet extends Component {
  static propTypes = {
    initialFrame: PropTypes.number,
    frameWidth: PropTypes.number,
    frameHeight: PropTypes.number,
    isPlaying: PropTypes.bool,
    loop: PropTypes.bool,
    speed: PropTypes.number,
  };

  static defaultProps = {
    loop: true,
    isPlaying: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      frame: props.initialFrame,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1,
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
