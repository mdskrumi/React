/**
 *
 * Product
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


const style = {
  margin: "10px",
}

function Product(props) {

  return (
    <div className="ui link card">
      <div className="card">
        <div className="image">
          <img src={props.image} />
        </div>
        <div className="content" style={style}>
          <h3 className="header">{props.title}</h3>
          <div className="description">
            {props.description}
          </div>
        </div>
        <div className="extra content" style={style} >
          <strong> Offer Price: {props.offerPrice}$ </strong>
          <br />
          <strong> Price: {props.price}$ </strong>
          <br />
          <div className="right floated">
            <div className="ui vertical animated button primary" tabIndex="0" style={{ width: '100px', margin: "10px" }}>
              <div className="hidden content">Add to Cart</div>
              <div className="visible content">
                <i className="shop icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Product.propTypes = {
};

export default Product;
