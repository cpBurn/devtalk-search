import { expect } from 'chai';
import { fromJS } from 'immutable';

import { reducer as moviesReducer, MoviesActions, MoviesType } from '../movies.redux';


describe('Movies: redux', () => {
  const state = fromJS({
    items: [],
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(moviesReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(moviesReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set data on FETCH_SUCCESS', () => {
      const data = [{ Title: 'Title 1' }, { Title: 'Title 2' }];
      const expectedState = state.set('items', data);
      const action = { data, type: MoviesType.FETCH_SUCCESS };
      expect(moviesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });

  describe('fetch', () => {
    it('should return correct type', () => {
      expect(MoviesActions.fetch().type).to.equal(MoviesType.FETCH);
    });

    it('should return proper payload', () => {
      const query = 'Lord of the rings';
      expect(MoviesActions.fetch(query).query).to.deep.equal(query);
    });
  });

  describe('fetchSuccess', () => {
    it('should return correct type', () => {
      expect(MoviesActions.fetchSuccess().type).to.equal(MoviesType.FETCH_SUCCESS);
    });

    it('should return proper payload', () => {
      const data = { key: 'value' };
      expect(MoviesActions.fetchSuccess(data).data).to.equal(data);
    });
  });

  describe('fetchError', () => {
    it('should return correct type', () => {
      expect(MoviesActions.fetchError().type).to.equal(MoviesActions.FETCH_ERROR);
    });

    it('should return proper payload', () => {
      const error = { prop: 'value' };
      expect(MoviesActions.fetchError(error).payload).to.equal(error);
    });
  });
});
