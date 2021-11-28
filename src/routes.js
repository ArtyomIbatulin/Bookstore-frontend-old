import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import AdminPage from "./pages/AdminPage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/orders" component={Orders} />
        <Route path="/admin" component={AdminPage} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/orders" component={Orders} />
      <Route path="/book/:id" component={BookPage} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
