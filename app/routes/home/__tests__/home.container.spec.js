import { expect } from 'chai';
import { spy } from 'sinon';

import { mapDispatchToProps } from '../home.container';
import { LocalesActions } from '../../../modules/locales/locales.redux';
import { MoviesActions } from '../../../modules/movies/movies.redux';


describe('Home: Container', () => {
  describe('mapDispatchToProps', () => {
    it('should call LocalesActions.setLanguage', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).setLanguage();

      expect(dispatch.firstCall.args[0]).to.deep.equal(LocalesActions.setLanguage());
    });
    it('should call MoviesActions.fetch', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).fetchMovies();

      expect(dispatch.firstCall.args[0]).to.deep.equal(MoviesActions.fetch());
    });
  });
});
