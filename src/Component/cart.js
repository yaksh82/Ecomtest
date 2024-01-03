import React from 'react';
import { useSelector } from 'react-redux';


const CartItem = ({ product, handleButton }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={product.image} alt={product.title} height="200px" width="180px" />
      </div>

      <div className="col-md-4">
        <h3>{product.title}</h3>
        <p className="lead-fw-bolder">
          {product.qty}x ${product.price} = ${product.qty * product.price}
        </p>

        <button
          className="btn btn-outline-dark me-4"
          onClick={() => handleButton(product, 'subtract')}
        >
          <i className="fa fa-minus"></i>
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleButton(product, 'add')}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
