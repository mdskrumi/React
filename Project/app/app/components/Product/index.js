/**
 *
 * Product
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { addToCart } from '../../containers/CartPage/actions';


const style = {
  margin: "10px",
}

function Product({ product }) {

  return (
    <div className="ui link card">
      <div className="card">
        <div className="image">
          <img className="ui image" src={product.image} style={{ objectFit: 'fill' }} />
        </div>
        <div className="content" style={style}>
          <h3 className="header">{product.title}</h3>
          <div className="description">
            {product.description}
          </div>
        </div>
        <div className="extra content" style={style} >
          <strong> Offer Price: {product.offerPrice}$ </strong>
          <br />
          <strong> Price: {product.price}$ </strong>
          <br />
          <div className="right floated">
            <div className="ui vertical animated button primary" tabIndex="0" style={{ width: '100px', margin: "10px" }} onClick={() => { addToCart(product); console.log("added called") }} >
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
