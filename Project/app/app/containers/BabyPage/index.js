/**
 *
 * BabyPage
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
import makeSelectBabyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import NavBar from '../../components/NavBar';
import Product from '../../components/Product';
import Loading from '../../components/Loading';


import {
  loadBabyShirtProducts,
  loadBabyJeansProducts,
} from './actions';




export function BabyPage(props) {
  useInjectReducer({ key: 'babyPage', reducer });
  useInjectSaga({ key: 'babyPage', saga });


  const path = console.log(window.location.pathname);
  console.log("BabyPage:", props);



  useEffect(() => {
    if (path === '/baby' || path === '/baby-shirt') { props.loadBabyShirtProducts(); }
    else if (path === '/baby-jeans') { props.loadBabyJeansProducts(); }
    else props.loadBabyShirtProducts();
  }, [])

  const items = [
    {
      name: "Baby Shirt",
      link: `/baby-shirt`,
    },
    {
      name: "Baby Jeans",
      link: `/baby-jeans`,
    },
  ];

  const renderContent = () => {
    if (props.babyPage.error) {
      return <h4>{props.babyPage.error.message}</h4>
    }
    else if (props.babyPage.loading) {
      return <Loading />
    }
    return props.babyPage.products.map(p =>
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

BabyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  babyPage: makeSelectBabyPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadBabyShirtProducts: () => dispatch(loadBabyShirtProducts()),
    loadBabyJeansProducts: () => dispatch(loadBabyJeansProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BabyPage);
