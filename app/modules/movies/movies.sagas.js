import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../api/api.sagas';
import { MoviesType, MoviesActions } from './movies.redux';


export function* fetchMoviesSaga({ query }) {
  try {
    const data = yield call(get, 'http://www.omdbapi.com', { s: query });

    yield put(MoviesActions.fetchSuccess(data));
  } catch (e) {
    yield put(MoviesActions.fetchError(e));
  }
}

export default function* moviesSaga() {
  yield [
    takeLatest(MoviesType.FETCH, fetchMoviesSaga),
  ];
}
