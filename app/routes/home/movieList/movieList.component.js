import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { Movie } from '../movie/movie.component';


export class MovieList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="movie-list">
          {this.props.items.toArray().map((item, key) => (
            <Movie key={key} data={item} />
          ))}
      </div>
    );
  }
}
