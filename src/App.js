import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import Sounds from "./components/Sounds";
import { Route, Switch, Redirect } from "react-router-dom";
import background from "./files/background.gif";
import Person from "./components/Person";
import Background from "./components/Background";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      {/* <StarScreen /> */}
      <div style={{ color: "whitesmoke" }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/sounds" exact component={Sounds} />
          <Route path="/background" exact component={Background} />
          <Route path="/participants/:participant" children={<Person />} />
          <Redirect from="/about-page" to="/about" />
          <Route component={NotFoundPage} />
        </Switch>
        <Header />
        {/* <Menu /> */}
      </div>

      <div
        style={{
          background: `url(${background})`,
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.7,
          top: 0,
          zIndex: 10,
        }}
      ></div>
      <div
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.8)`,
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.6,
          top: 0,
          zIndex: 10,
        }}
      ></div>
    </>
  );
}

export default App;
