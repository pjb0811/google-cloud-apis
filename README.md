# google-cloud-apis

> api library using google cloud

[![NPM](https://img.shields.io/npm/v/google-cloud-apis.svg)](https://www.npmjs.com/package/google-cloud-apis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save google-cloud-apis
```

## Usage

### Vision

```tsx
import React, { Component } from 'react';

import { vision } from 'google-cloud-apis';

const API_KEY = '...';

export default class App extends Component {
  state = {
    res: null
  };

  componentDidMount() {
    vision({
      key: API_KEY,
      data: {
        requests: [
          {
            image: {
              source: {
                imageUri: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
              }
            },
            features: [
              {
                maxResults: 10,
                type: 'LABEL_DETECTION'
              }
            ]
          }
        ]
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
      const { responses } = res.data;

      return (
        <ul>
          {responses.map(response => {
            return response.labelAnnotations.map((label, i) => {
              return <li key={i}>{label.description}</li>;
            });
          })}
        </ul>
      );
    }

    return <div>loading...</div>;
  }
}
```

### Translation

```tsx
import React, { Component } from 'react';

import { translation } from 'google-cloud-apis';

class TranslationSample extends Component {
  state = {
    res: null
  };

  componentDidMount() {
    translation({
      key: '...',
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
```

## License

MIT © [pjb0811](https://github.com/pjb0811)
