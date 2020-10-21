/**
 *
 * CartPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCartPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { addToCart, removeFromCart } from './actions';




export function CartPage(props) {
  useInjectReducer({ key: 'cartPage', reducer });
  useInjectSaga({ key: 'cartPage', saga });

  console.log("CartPage", props);


  return (
    <div>
      <Helmet>
        <title>CartPage</title>
        <meta name="description" content="Description of CartPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <button onClick={() => { props.addToCart() }} >asd</button>
    </div>
  );
}

CartPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartPage: makeSelectCartPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addToCart: () => dispatch(addToCart({ "id": 2, "title": "Three" }))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CartPage);
