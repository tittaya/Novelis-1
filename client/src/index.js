import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import WorkShop from "views/WorkShop/WorkShopPage.js";
import Timeline from "views/Timeline/Timeline.js";
import Character from "views/Character/Character.js";
import Chapter from "views/Chapter/Chapter.js";
import Mapping from "views/Mapping/Mapping.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/workshop-page" component={WorkShop} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/character" component={Character} />
      <Route path="/chapter" component={Chapter} />
      <Route path="/mapping" component={Mapping} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
