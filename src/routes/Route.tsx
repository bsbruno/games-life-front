import React from "react";
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  const isAutheticate = localStorage.getItem("@GameLife:user");
  const teste = JSON.parse(isAutheticate);
  return (
    <ReactDOMRoute
      {...rest}
      render={(props) =>
        teste ? <Component {...rest} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Route;
