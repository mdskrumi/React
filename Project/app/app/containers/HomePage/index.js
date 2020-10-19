/**
 *
 * HomePage
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
import { makeSelectHomePage } from './selectors';
import { loadProducts } from './actions'
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


import Product from '../../components/Product'
import OfferBanner from '../../components/OfferBanner'

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  console.log(props);


  useEffect(() => {
    loadProducts();
  }, [])


  const makeList = () => {
    return props.homePage.products.map(p =>
      <Product
        key={p.id}
        title={p.title}
        description={p.description}
        image={p.image}
        price={p.price}
        offerPrice={p.offer_price}
      />
    );
  }

  return (
    <div>
      <OfferBanner />
      {makeList()}

    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadProducts: () => dispatch(loadProducts),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
