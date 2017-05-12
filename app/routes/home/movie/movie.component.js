import React, { PropTypes, PureComponent } from 'react';
import { get } from 'lodash';

export class Movie extends PureComponent {
  static propTypes = {
    movie: PropTypes.object,
  };

  render() {
    console.log(this.props.movie);
    return (
      <div className="movie">
        <div className="movie__item movie__title">{get(this.props.movie, 'Title')}</div>
        <img src={get(this.props.movie, 'Poster')} />
        <div className="movie__item">{get(this.props.movie, 'Type')}</div>
        <div className="movie__item">{get(this.props.movie, 'Year')}</div>
      </div>
    );
  }
}
