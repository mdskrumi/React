/**
 *
 * BabyPage
 *
 */

import React from 'react';
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

export function BabyPage() {
  useInjectReducer({ key: 'babyPage', reducer });
  useInjectSaga({ key: 'babyPage', saga });

  const path = window.location.pathname;
  const items = [
    {
      name: "Baby Shirt",
      link: `baby-shirt`,
    },
    {
      name: "Baby Jeans",
      link: `baby-jeans`,
    },
  ]


  return (
    <div>
      <NavBar items={items} isMainNavBar={false} />
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BabyPage);
