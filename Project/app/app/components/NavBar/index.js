/**
 *
 * NavBar
 *
 */

import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Link } from 'react-router-dom';
import LocaleToggle from '../../containers/LocaleToggle';

function NavBar(props) {

  const path = window.location.pathname;
  const renderContent = () => {
    return props.items.map((item) => {
      return <Link to={item.link} className={`item ${(path === item.link) ? 'active' : ""}`} key={item.name}>{item.name}</Link>
    })
  }

  const renderIfMainNav = () => {
    if (props.isMainNavBar) {
      return (
        <div className="right menu">
          <section className="item">
            Language
          <LocaleToggle />
          </section>
          <Link to='/cart' className='item' > <i className="shopping cart icon" > </i>  </Link>
          <Link to='/logout' className={`item ${(path === '/logout') ? 'active_' : ""}`}>Sign In</Link>
        </div>
      )
    }
    else {
      return null;
    }
  }

  return (
    <div className='ui header'>
      <div className="ui secondary pointing menu">
        {renderContent()}
        {renderIfMainNav()}
      </div>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
