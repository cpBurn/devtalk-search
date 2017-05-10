import React, { PropTypes, PureComponent } from 'react';
import { get } from 'lodash';

export class Movie extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    return (
      <div className="movie">
        <div className="movie__item movie__title">{get(this.props.data, 'Title')}</div>
        <div className="movie__item">{get(this.props.data, 'Director')}</div>
      </div>
    );
  }
}
