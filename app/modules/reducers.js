import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as moviesReducer } from './movies/movies.redux';


export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    movies: moviesReducer,
    locales: localesReducer,
  });
}
