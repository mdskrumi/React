/**
 *
 * OfferBanner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function OfferBanner() {
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">
        <div className="column">
          <h1>This is ad one</h1>
        </div>
        <div className="column">
          <h1>This is ad Two</h1>
        </div>
      </div>
      <div className="ui vertical divider">
        |
        </div>
    </div>
  );
}

OfferBanner.propTypes = {};

export default OfferBanner;
