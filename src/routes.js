import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wishlist from './pages/Wishlist';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import AdminPage from './pages/AdminPage';
import SignIn from './pages/signIn/SignIn';

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/wishlist" component={Wishlist} />
        {/* <Route path="/books" component={MainPage} /> */}
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
      {/* <Route exact path="/" component={MainPage} /> */}
      <Route exact path="/sign-in" component={SignIn} />
      <Redirect to="/sign-in" />
    </Switch>
  );
};

export default useRoutes;