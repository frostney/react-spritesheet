import React from 'react';
import { HelloWorld } from '../dist/react-lib-starterkit.es2015';

import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<HelloWorld />', () => {
  it('renders a <div />', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
