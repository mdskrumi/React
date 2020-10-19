/**
 *
 * ManPage
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
import makeSelectManPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import NavBar from '../../components/NavBar';



export function ManPage() {
  useInjectReducer({ key: 'manPage', reducer });
  useInjectSaga({ key: 'manPage', saga });


  const path = window.location.pathname;
  const items = [
    {
      name: "Shirt",
      link: `shirt`,
    },
    {
      name: "Jeans",
      link: `jeans`,
    },
  ]


  return (
    <div>
      <NavBar items={items} isMainNavBar={false} />
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ManPage);
