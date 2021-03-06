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

### analytics

```tsx
import React, { Component } from 'react';
import { analytics } from 'google-cloud-apis';
import { GoogleLogin } from 'react-google-login';

class AnalyticsSample extends Component {
  state = {
    button: {
      text: 'login'
    },
    res: ''
  };

  componentDidMount() {
    analytics({
      delay: 1000,
      viewId: '...',
      data: {
        dateRanges: [
          {
            startDate: '1daysAgo',
            endDate: 'today'
          }
        ],
        metrics: [{ expression: 'ga:pageviews' }],
        dimensions: [{ name: 'ga:pagePath' }],
        orderBys: [
          {
            fieldName: 'ga:pageviews',
            sortOrder: 'DESCENDING'
          }
        ]
      }
    }).then(
      res => {
        this.setState({
          button: {
            text: 'sign in'
          },
          res: JSON.stringify(res.result.reports[0].data, null, 2)
        });
      },
      res => {
        this.setState({
          res
        });
      }
    );
  }

  responseGoogle = res => {
    this.setState({
      button: {
        text: 'sign in'
      }
    });
  };

  render() {
    const { res, button } = this.state;

    return (
      <div>
        <GoogleLogin
          clientId="..."
          buttonText={button.text}
          onSuccess={this.responseGoogle}
        />
        <textarea
          cols="80"
          rows="20"
          id="query-output"
          value={res}
          readOnly={true}
        />
      </div>
    );
  }
}

export default AnalyticsSample;
```

## License

MIT © [pjb0811](https://github.com/pjb0811)
