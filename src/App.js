import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard'
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <Layout>
            
              <Route exact path="/" component={Dashboard} />
        
          </Layout>
        </div>

      </BrowserRouter>

    )
  }
}
export default App;
