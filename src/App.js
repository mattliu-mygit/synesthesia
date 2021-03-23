import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import StarScreen from './components/StarScreen';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import PianoPage from './components/PianoPage';
import Sounds from './components/Sounds';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <StarScreen /> */}
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/piano" exact component={PianoPage} />
        <Route path="/sounds" exact component={Sounds} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
