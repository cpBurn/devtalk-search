import { createActions, createReducer } from 'reduxsauce';
import { Record } from 'immutable';
import { get } from 'lodash';

export const { Types: MoviesType, Creators: MoviesActions } = createActions({
  fetch: ['query'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'MOVIES_' });

const MoviesRecord = new Record({
  items: [],
});

export const INITIAL_STATE = new MoviesRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', get(action.data, 'Search'));

export const reducer = createReducer(INITIAL_STATE, {
  [MoviesType.FETCH_SUCCESS]: getSuccessHandler,
});
