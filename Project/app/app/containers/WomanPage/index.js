/**
 *
 * WomanPage
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
import makeSelectWomanPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';



import NavBar from '../../components/NavBar';



export function WomanPage() {
  useInjectReducer({ key: 'womanPage', reducer });
  useInjectSaga({ key: 'womanPage', saga });

  const path = window.location.pathname;
  const items = [
    {
      name: "Woman Shirt",
      link: `woman-shirt`,
    },
    {
      name: "Woman Jeans",
      link: `woman-jeans`,
    },
  ]


  return (
    <div>
      <NavBar items={items} isMainNavBar={false} />
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WomanPage);
