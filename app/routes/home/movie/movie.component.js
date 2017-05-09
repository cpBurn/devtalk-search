import React, { PropTypes, PureComponent } from 'react';


export class Movie extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="movie">
        {this.props.data.get('firstName')} {this.props.data.get('lastName')} &lt;{this.props.data.get('email')}&gt;
      </div>
    );
  }
}
