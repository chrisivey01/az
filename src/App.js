import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { BrowserRouter, Route } from "react-router-dom";
import store from './store'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Main />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
