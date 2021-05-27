import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import css here
import './css/stylePage.css'

import LandingPage from "./Components/landing Page/LandingPage";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/main-page" exact component={MainPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
