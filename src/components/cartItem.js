import React from 'react';
import { StateContext } from '../context/state'

export default function CartItem({ product }) {
  const [state, dispatch] = StateContext()

  const removeFromCart = id => {
    console.log('clicked')

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img className="cart-item__image" src={product.image} alt="" />

        <div className="cart-item__content">
          <h4 className="cart-item__title">{product.title}</h4>
          <span className="cart-item__quantity">
            Quantity: 
            <span>{product.quantity}</span>
          </span>
        <button
            onClick={() => removeFromCart(product.id)}
            className="cart-item__remove"
          >remove</button>
        </div>
      </div>

        <div className="cart-item__right">
          <p className="cart-item__price">${product.price}</p>
        </div>
    </div>
  )
};
