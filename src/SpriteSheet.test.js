import test from 'ava';

import React from 'react';
import SpriteSheet from './SpriteSheet';

import { render } from 'enzyme';

const FILENAME = 'https://cdn.codeandweb.com/blog/2014/11/05/animate-sprites-in-css-with-texturepacker/capguy-walk.png';

test('is instantiable', t => {
  const wrapper = render(<SpriteSheet
    filename={FILENAME}
    sprite="hello"
    data={{ hello: { x: 0, y: 0, width: 0, height: 0 } }}
  />);

  t.ok(wrapper);
});
