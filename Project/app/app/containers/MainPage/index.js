/**
 *
 * MainPage
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ManPage from 'containers/ManPage/Loadable';
import WomanPage from 'containers/WomanPage/Loadable';
import BabyPage from 'containers/BabyPage/Loadable';
import CartPage from 'containers/CartPage';


import history from '../../utils/history';

import NavBar from '../../components/NavBar';

import GlobalStyle from '../../global-styles';

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

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

  console.log("MAINPAGE: ", props);


  return (
    <div>
      <Helmet>
        <title>React Ecommerce</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <div className='ui container'>
        <Router history={history}>
          <NavBar items={items} isMainNavBar={true} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/man" component={ManPage} />
            <Route exact path="/shirt" component={ManPage} />
            <Route exact path="/jeans" component={ManPage} />
            <Route exact path="/woman" component={WomanPage} />
            <Route exact path="/woman-shirt" component={WomanPage} />
            <Route exact path="/woman-jeans" component={WomanPage} />
            <Route exact path="/baby" component={BabyPage} />
            <Route exact path="/baby-shirt" component={BabyPage} />
            <Route exact path="/baby-jeans" component={BabyPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
        <GlobalStyle />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MainPage);
