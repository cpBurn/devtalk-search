import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectMoviesItems } from '../movies.selectors';

describe('Movies: selectors', () => {
  const items = [
    {
      Title: 'Fake title',
    },
  ];

  const mockedState = fromJS({
    maintainers: {
      items,
    },
  });

  describe('selectMaintainersList', () => {
    it('should select movie item', () => {
      expect(selectMoviesItems(mockedState)).to.equal(items);
    });
  });
});
