import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Confirm from "./confirm";
import Place from "./place";
import Profile from "./profile";
import Places from "./places";
import Favorites from "./favorites";
import Host from "./host";
import Thumbnail from "./thumbnail";
import Sidebar from "./sidebar";
import Bookings from "./bookings";
import Create from "./create";

class Router extends React.Component {
  checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/favorites"
            render={() =>
              this.checkAuth() ? <Favorites /> : <Redirect to="/login" />
            }
          />
          <Route path="/thumbnail" component={Thumbnail} />
          <Route
            path="/bookings"
            render={() =>
              this.checkAuth() ? <Bookings /> : <Redirect to="/login" />
            }
          />
          <Route path="/sidebar" component={Sidebar} />
          <Route
            path="/place/:id"
            render={() =>
              this.checkAuth() ? <Place /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/profile"
            render={() =>
              this.checkAuth() ? <Profile /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/confirm"
            render={() =>
              this.checkAuth() ? <Confirm /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/places"
            render={() =>
              this.checkAuth() ? <Places /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/create"
            render={() =>
              this.checkAuth() ? <Create /> : <Redirect to="/login" />
            }
          />

          <Route path="/login" component={Login} />
          <Route
            path="/host"
            render={() =>
              this.checkAuth() ? <Host /> : <Redirect to="/login" />
            }
          />
          <Route path="/" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
