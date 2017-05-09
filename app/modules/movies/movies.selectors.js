import { createSelector } from 'reselect';


const selectMoviesDomain = state => state.get('movies');

export const selectMoviesItems = createSelector(
  selectMoviesDomain, state => state.get('items')
);
