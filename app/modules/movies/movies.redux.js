import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS } from 'immutable';

export const { Types: MoviesType, Creators: MoviesActions } = createActions({
  fetch: ['query'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'MOVIES_' });

const MoviesRecord = new Record({
  movie: {},
});

export const INITIAL_STATE = new MoviesRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('movie', action.data);

export const reducer = createReducer(INITIAL_STATE, {
  [MoviesType.FETCH_SUCCESS]: getSuccessHandler,
});
