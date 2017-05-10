import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { Movie } from '../movie/movie.component';


export class MovieList extends PureComponent {
  static propTypes = {
    movie: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="movie-list">
        <Movie data={this.props.movie} />
      </div>
    );
  }
}
