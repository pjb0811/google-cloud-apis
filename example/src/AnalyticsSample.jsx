import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { analytics } from 'google-cloud-apis';

class AnalyticsSample extends Component {
  state = {
    res: ''
  };

  componentDidMount() {
    analytics({
      delay: 1000,
      viewId: '183746371',
      data: {
        dateRanges: [
          {
            startDate: '7daysAgo',
            endDate: 'today'
          }
        ],
        metrics: [{ expression: 'ga:pageviews' }],
        dimensions: [{ name: 'ga:pageTitle' }],
        orderBys: [
          {
            fieldName: 'ga:pageviews',
            sortOrder: 'DESCENDING'
          }
        ]
      }
    }).then(res => {
      this.setState({
        res: JSON.stringify(res.result.reports[0].data, null, 2)
      });
    });
  }

  render() {
    const { res } = this.state;

    return (
      <div>
        <Helmet>
          <meta
            name="google-signin-client_id"
            content="183407112685-51gi54qhqn734uid2lvvasucse6db0lo.apps.googleusercontent.com"
          />

          <meta
            name="google-signin-scope"
            content="https://www.googleapis.com/auth/analytics.readonly"
          />

          <script src="https://apis.google.com/js/client:platform.js" />
        </Helmet>

        <p className="g-signin2" data-onsuccess="queryReports" />
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
