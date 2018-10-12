import React, { Component } from 'react';
import VisionSample from './VisionSample';
import TranslationSample from './TraslationSample';

class App extends Component {
  render() {
    return (
      <div>
        {/* <VisionSample /> */}
        <TranslationSample />
      </div>
    );
  }
}

export default App;
