import moviesSaga from './movies/movies.sagas';

export default function* rootSaga() {
  yield [
    moviesSaga(),
  ];
}
