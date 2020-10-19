/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ManPage from 'containers/ManPage/Loadable';
import WomanPage from 'containers/WomanPage/Loadable';
import BabyPage from 'containers/BabyPage/Loadable';


import history from '../../utils/history';

import NavBar from '../../components/NavBar';

import GlobalStyle from '../../global-styles';

const items = [
  {
    name: "Home",
    link: '/',
  },
  {
    name: "Man",
    link: '/man',
  },
  {
    name: "Woman",
    link: '/woman',
  },
  {
    name: "Baby",
    link: '/baby',
  }
]

export default function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <NavBar items={items} isMainNavBar={true} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/man" component={ManPage} />
          <Route exact path="/woman" component={WomanPage} />
          <Route exact path="/baby" component={BabyPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
