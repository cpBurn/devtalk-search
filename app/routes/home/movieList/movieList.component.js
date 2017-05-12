import React, { PropTypes, PureComponent } from 'react';
import { Movie } from '../movie/movie.component';


export class MovieList extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  renderMovie = (movie, key) => <Movie movie={movie} key={key} />;

  render() {
    return (
      <div className="movie-list">
        {this.props.data.map(this.renderMovie)}
      </div>
    );
  }
}
