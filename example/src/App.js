import React, { Component } from 'react';
import VisionSample from './VisionSample';
import TranslationSample from './TraslationSample';
import AnalyticsSample from './AnalyticsSample';

class App extends Component {
  render() {
    return (
      <div>
        {/* <VisionSample /> */}
        {/* <TranslationSample /> */}
        <AnalyticsSample />
      </div>
    );
  }
}

export default App;
