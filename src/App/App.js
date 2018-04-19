import React, { Component } from 'react';
import './App.css';
// import Login from '../login/login';

class App extends Component {
  render() {
      return (
        // <Login />  
        <div>
          {this.props.children}
        </div>
      );
  }
}

export default App;
