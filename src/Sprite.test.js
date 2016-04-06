import test from 'ava';

import React from 'react';
import Sprite from './Sprite';

import { render } from 'enzyme';

const FILENAME = 'https://cdn.codeandweb.com/blog/2014/11/05/animate-sprites-in-css-with-texturepacker/capguy-walk.png';

test('is instantiable', t => {
  const wrapper = render(<Sprite filename={FILENAME} />);

  t.ok(wrapper);
});
