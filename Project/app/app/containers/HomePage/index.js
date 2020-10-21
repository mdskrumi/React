/**
 *
 * HomePage
 *
 */

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectHomePage } from './selectors';
import { loadProducts } from './actions';
import reducer from './reducer';
import saga from './saga';


import Product from '../../components/Product';
import OfferBanner from '../../components/OfferBanner';
import Loading from '../../components/Loading';


export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  console.log(props);

  useEffect(() => {
    props.loadProducts();
  }, []);



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
      />
    );
  }


  return (
    <div>
      {/* <div class="ui segment">
        <div class="ui right rail">
          <div class="ui segment">
            {renderContent()}
          </div>
        </div>
      </div> */}
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
    loadProducts: () => dispatch(loadProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
