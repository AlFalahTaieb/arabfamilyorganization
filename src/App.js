import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route,  } from 'react-router-dom'


import Layout from './components/Layout/Layout'


/*PAGE IMPORT */
import Page1 from './components/Pages/Page1/Page1'
import Page2 from './components/Pages/Page2/Page2'
import Page3 from './components/Pages/Page3/Page3'
import Page4 from './components/Pages/Page4/Page4'
import Page5 from './components/Pages/Page5/Page5'
import Page6 from './components/Pages/Page6/Page6'
import PageTest from './components/Pages/PageTest/PageTest'


import Dashboard from './components/Dashboard/Dashboard'

/**END OF PAGE IMPORT */
class App extends Component {

  render() {
    return (

      <BrowserRouter>

        <div className="App">

          <Layout>

            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Page1" component={Page1} />
            <Route exact path="/Page2" component={Page2} />
            <Route exact path="/Page3" component={Page3} />
            <Route exact path="/Page4" component={Page4} />
            <Route exact path="/Page5" component={Page5} />
            <Route exact path="/Page6" component={Page6} />
            <Route exact path="/test" component={PageTest} />
          </Layout>
        </div>
      </BrowserRouter>

    )
  }
}
export default App;
