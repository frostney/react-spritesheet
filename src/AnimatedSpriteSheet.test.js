import test from 'ava';

import React from 'react';
import AnimatedSpriteSheet from './AnimatedSpriteSheet';

import { render } from 'enzyme';

const FILENAME = 'https://cdn.codeandweb.com/blog/2014/11/05/animate-sprites-in-css-with-texturepacker/capguy-walk.png';

test('is instantiable', t => {
  const wrapper = render(<AnimatedSpriteSheet filename={FILENAME} />);

  t.truthy(wrapper);
});
