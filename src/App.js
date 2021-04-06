import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import StarScreen from "./components/StarScreen";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import PianoPage from "./components/PianoPage";
import Sounds from "./components/Sounds";
import { Route, Switch, Redirect } from "react-router-dom";
import PodcastPage from "./components/PodcastPage";
import background from "./files/background.gif";

function App() {
  return (
    <>
      <div
        style={{
          background: `url(${background})`,
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.25,
          top: 0,
        }}
      ></div>
      {/* <StarScreen /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/piano" exact component={PianoPage} />
        <Route path="/sounds" exact component={Sounds} />
        <Route path="/podcasts" exact component={PodcastPage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
      <Header />
    </>
  );
}

export default App;
