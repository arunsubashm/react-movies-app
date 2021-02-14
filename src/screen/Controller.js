import React, { Component } from 'react';
import Home from '../screen/home/Home';
import Details from '../screen/details/Details';
import moviesData from '../assets/movieData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screen/bookshow/BookShow';
import Confirmation from '../screen/confirmation/Confirmation';

class Controller extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props} moviesData={moviesData} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;