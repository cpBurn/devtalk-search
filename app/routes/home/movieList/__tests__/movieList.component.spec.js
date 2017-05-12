import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { MovieList } from '../movieList.component';
import { Movie } from '../../movie/movie.component';


describe('MaintainerList: Component', () => {
  const defaultProps = {
    items: fromJS([1, 2, 3]),
  };

  const component = (props) => (
    <MovieList {...defaultProps} {...props} />
  );

  it('should render MovieList root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.movie-list')).to.have.length(1);
  });

  it('should proper number of <Movie />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Movie)).to.have.length(defaultProps.items.size);
  });

  it('should pass data prop to <Movie />', () => {
    const wrapper = shallow(component({}));

    defaultProps.items.forEach((item, index) => {
      expect(wrapper.find(Movie).at(index).prop('data')).to.equal(item);
    });
  });
});
