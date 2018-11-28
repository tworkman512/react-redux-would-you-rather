import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Navigation from '../components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div>
            <Route path='/' exact component={ Home } />
            <Route path='/new-questions' component={ NewQuestion } />
            <Route path='/leader-board' component={ LeaderBoard } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
