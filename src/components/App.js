import React, { Component } from 'react';
import Navbar from './Navbar';

import '../styles/components/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Navbar />

          <div> {this.props.children}</div>
      </div>
    );
  }
}

export default App;
