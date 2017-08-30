import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandinPageTwo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LandingPage/>
      </MuiThemeProvider>
    );
  }
}

export default App;
