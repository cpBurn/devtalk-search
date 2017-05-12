import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import { sandbox } from 'sinon';

import moviesSaga, {} from '../movies.sagas';
import * as apiSaga from '../../api/api.sagas';
import { MoviesActions } from '../movies.redux';


describe('Movies: sagas', () => {
  let sagaTester = null;
  let userSandbox = null;

  beforeEach(() => {
    sagaTester = new SagaTester({
      initialState: fromJS({
        // locales: { language: 'en' },
        // user: { redirectUrl: '/some-url' },
      }),
    });
    sagaTester.start(moviesSaga);

    userSandbox = sandbox.create();
    userSandbox.stub(global, 'fetch').callsFake(() => Promise.resolve({
      json: () => {},
    }));
  });

  afterEach(() => {
    userSandbox.restore();
  });

  describe('loginSaga', () => {
    it('should pass proper params to get', () => {
      const query = 'Lord of the rings';
      userSandbox.stub(apiSaga, 'get').callsFake(() => 'somedata');

      sagaTester.dispatch(moviesSaga.fetch(query));

      expect(apiSaga.get.firstCall.args).to.deep.equal([
        'http://www.omdbapi.com', { s: query },
      ]);
    });

    it('should dispatch fetchSuccess action after successful API call', () => {
      const query = 'Lord of the rings';
      userSandbox.stub(apiSaga, 'get').callsFake(() => 'somedata');

      sagaTester.dispatch(MoviesActions.fetch(query));

      expect(sagaTester.getCalledActions()).to.include(MoviesActions.fetchSuccess('somedata'));
    });

    it('should dispatch fetchError action after not successful API call', () => {
      userSandbox.stub(apiSaga, 'get').callsFake(() => {
        throw 'error';
      });

      sagaTester.dispatch(MoviesActions.fetch('Lord of the rings'));

      expect(sagaTester.getCalledActions()).to.include(MoviesActions.fetchError('error'));
    });
  });
});
