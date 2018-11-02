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
      viewId: '183746371',
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
          clientId="183407112685-51gi54qhqn734uid2lvvasucse6db0lo.apps.googleusercontent.com"
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
