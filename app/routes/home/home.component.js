import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';

import messages from './home.messages';
import { Movie } from './movie/movie.component';
import { LanguageSelector } from './languageSelector/languageSelector.component';


export class Home extends PureComponent {
  static propTypes = {
    movie: PropTypes.object,
    language: PropTypes.string.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.fetchMovies('Lord of the Rings');
  }

  fetchMovies = (query) => {
    this.props.fetchMovies(query);
  };

  render() {
    return (
      <div className="home">
        <Helmet
          title="Homepage"
        />

        <h1 className="home__title">
          <i className="home__title-logo" />
          <FormattedMessage {...messages.welcome} />
        </h1>

        <div>Environment: {envConfig.name}</div>

        <Movie data={this.props.movie} />

        <LanguageSelector
          language={this.props.language}
          setLanguage={this.props.setLanguage}
          router={this.props.router}
        />
      </div>
    );
  }
}
