import React from "react";
import { Switch, Route } from "react-router-dom";

import GameCart from "../pages/GameCart";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Details from "../pages/Details";
import MyAccount from "../pages/MyAccout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/games/store/take" component={Store} />
    <Route path="/games/:slug" component={Details} />
    <Route path="/account" component={MyAccount} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/game/cart" component={GameCart} />
  </Switch>
);
export default Routes;
