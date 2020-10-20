/**
 *
 * Loading
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Loading() {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader"><FormattedMessage {...messages.header} /></div>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
