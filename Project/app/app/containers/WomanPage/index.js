/**
 *
 * WomanPage
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
import makeSelectWomanPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';



import NavBar from '../../components/NavBar';
import Product from '../../components/Product';
import Loading from '../../components/Loading';

import {
  loadWomanShirtProducts,
  loadWomanJeansProducts,
} from './actions';



export function WomanPage(props) {
  useInjectReducer({ key: 'womanPage', reducer });
  useInjectSaga({ key: 'womanPage', saga });

  const path = console.log(window.location.pathname);
  console.log("WomanPage:", props);

  useEffect(() => {
    if (path === '/woman' || path === '/woman-shirt') { props.loadWomanShirtProducts(); }
    else if (path === '/woman-jeans') { props.loadWomanJeansProducts(); }
    else props.loadWomanShirtProducts();
  }, [])

  const items = [
    {
      name: "Woman Shirt",
      link: `/woman-shirt`,
    },
    {
      name: "Woman Jeans",
      link: `/woman-jeans`,
    },
  ];

  const renderContent = () => {
    if (props.womanPage.error) {
      return <h4>{props.womanPage.error.message}</h4>
    }
    else if (props.womanPage.loading) {
      return <Loading />
    }
    return props.womanPage.products.map(p =>
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

WomanPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  womanPage: makeSelectWomanPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadWomanShirtProducts: () => dispatch(loadWomanShirtProducts()),
    loadWomanJeansProducts: () => dispatch(loadWomanJeansProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WomanPage);
