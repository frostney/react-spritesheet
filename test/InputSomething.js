import React from 'react';
import { InputSomething } from '../dist/react-lib-starterkit.es2015';

import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<InputSomething />', () => {
  it('renders a <input />', () => {
    const wrapper = shallow(<InputSomething />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});
