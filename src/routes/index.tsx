import React from "react";
import { Switch, Route as RouterDOM } from "react-router-dom";
import ProtectRoute from "./Route";
import GameCart from "../pages/GameCart";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Details from "../pages/Details";
import MyAccount from "../pages/MyAccout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Routes = () => (
  <Switch>
    <RouterDOM path="/" exact component={Home} />
    <RouterDOM path="/games/store/take" exact component={Store} />
    <RouterDOM path="/games/:slug" exact component={Details} />
    <RouterDOM path="/account" exact component={MyAccount} />
    <RouterDOM path="/signin" exact component={SignIn} />
    <RouterDOM path="/signup" exact component={SignUp} />
    <ProtectRoute path="/game/cart" exact component={GameCart} />
  </Switch>
);
export default Routes;
