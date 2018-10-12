import React, { Component } from 'react';

import { vision } from 'google-cloud-apis';

class VisionSample extends Component {
  state = {
    res: null
  };

  componentDidMount() {
    vision({
      key: 'AIzaSyCSLv_707zXup5yJKYlG-j5T2Dh7KxP__0',
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

export default VisionSample;
