import React, { Component } from 'react';
import SelectUser from './components/selectUser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SelectUser />
      </div>
    );
  }
}

export default App;
