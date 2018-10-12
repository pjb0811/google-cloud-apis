import React, { Component } from 'react';

import { translation } from 'google-cloud-apis';

class TranslationSample extends Component {
  state = {
    res: null
  };

  componentDidMount() {
    translation({
      key: 'AIzaSyCSLv_707zXup5yJKYlG-j5T2Dh7KxP__0',
      data: {
        target: 'ko',
        q: 'test'
      }
    }).then(res => {
      this.setState({
        res
      });
    });
  }

  render() {
    const { res } = this.state;
    if (res) {
      return (
        <div>
          {res.data.data.translations.map(
            translation => translation.translatedText
          )}
        </div>
      );
    }
    return <div>loading...</div>;
  }
}

export default TranslationSample;
