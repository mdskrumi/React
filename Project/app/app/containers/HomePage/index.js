/**
 *
 * HomePage
 *
 */

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectHomePage } from './selectors';
import { loadProducts } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


import Product from '../../components/Product';
import OfferBanner from '../../components/OfferBanner';
import Loading from '../../components/Loading';

import CartContext from '../../context/CartContext';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });


  const cart = useContext(CartContext);

  useEffect(() => {
    loadProducts();
  }, [])
  console.log(props);


  const addToCart = (product) => {
    cart.addProduct(product);
    console.log(cart);
  }

  const renderContent = () => {
    if (props.homePage.error) {
      return <h4>{props.homePage.error.message}</h4>
    }
    else if (props.homePage.loading) {
      return <Loading />
    }
    return props.homePage.products.map(p =>
      <Product
        key={p.id}
        product={p}
        addToCart={addToCart}
      />
    );
  }



  // const read = () => {
  //   <CartContext.Consumer >
  //     {(value) => {
  //       return <button>{value.cartItem}</button>
  //     }}
  //   </CartContext.Consumer>
  // }

  return (
    <div>
      <OfferBanner />
      {renderContent()}
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
