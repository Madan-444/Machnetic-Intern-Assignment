import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
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
