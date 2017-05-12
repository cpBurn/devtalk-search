import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { Maintainer } from '../movie.component';


describe('Movie: Component', () => {
  const defaultProps = {
    data: fromJS({
      Title: 'Lord of the Rings',
      // Poster: 'www.google.com/img.jpg',
      // Year: '2002',
      // Type: 'movie',
    }),
  };

  const component = (props) => (
    <Maintainer {...defaultProps} {...props} />
  );

  it('should render Movie root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.movie__item')).to.have.length(1);
  });

  it('should render proper text inside .movie__item', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.movie__item').render().text()).to.equal('Lord of the Rings');
  });
});
