import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Frontend from 'pages/Frontend';
import Home from 'pages/Home/Home';
import Search from 'pages/Search/Search';
import Page from 'pages/Page/Page';
import PageAbout from 'pages/Page/PageAbout';
import Blog from 'pages/Blog/Blog';
import BlogPost from 'pages/BlogPost/Post';
import Signin from 'pages/Auth/Signin';
import Signup from 'pages/Auth/Signup';
import Recovery from 'pages/Auth/Recovery';
import Reset from 'pages/Auth/Reset';
import Page404 from 'pages/Error/404';
import Page500 from 'pages/Error/500';

export const routes = (store) => {
  return (
    <Frontend>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/page/:page" component={Page} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:category" component={Blog} />
        <Route exact path="/blog/:category/:post" component={BlogPost} />
        <Route exact path="/auth/singin" component={Signin} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/recovery" component={Recovery} />
        <Route exact path="/auth/reset" component={Reset} />
      </Switch>
      </Frontend>
      );
};

export default routes;
