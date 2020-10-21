/**
 *
 * ManPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectManPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import NavBar from '../../components/NavBar';
import Product from '../../components/Product';
import Loading from '../../components/Loading';

import {
  loadManShirtProducts,
  loadManJeansProducts,
} from './actions';

export function ManPage(props) {
  useInjectReducer({ key: 'manPage', reducer });
  useInjectSaga({ key: 'manPage', saga });

  const path = console.log(window.location.pathname);
  console.log("ManPage:", props);

  useEffect(() => {
    if (path === '/man' || path === '/shirt') { props.loadManShirtProducts(); }
    else if (path === '/jeans') { props.loadManJeansProducts(); }
    else props.loadManShirtProducts();
  }, [])

  const items = [
    {
      name: "Shirt",
      link: `/shirt`,
    },
    {
      name: "Jeans",
      link: `/jeans`,
    },
  ];

  const renderContent = () => {
    if (props.manPage.error) {
      return <h4>{props.manPage.error.message}</h4>
    }
    else if (props.manPage.loading) {
      return <Loading />
    }
    return props.manPage.products.map(p =>
      <Product
        key={p.id}
        product={p}
      />
    );
  }


  return (
    <div>
      <NavBar items={items} isMainNavBar={false} />
      {renderContent()}
    </div>
  );
}

ManPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manPage: makeSelectManPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadManShirtProducts: () => dispatch(loadManShirtProducts()),
    loadManJeansProducts: () => dispatch(loadManJeansProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ManPage);
