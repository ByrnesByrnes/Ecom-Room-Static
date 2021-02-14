import React from 'react';
import { StateContext } from '../context/state'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'


export default function CartItem({ product, remove = true }) {
  const [state, dispatch] = StateContext()

  const removeFromCart = id => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }

  return (
    <div className="cart-item">
      <div className="cart-item__left">
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <img className="cart-item__image" src={product.image} alt="" />
      </Link>
        <div className="cart-item__content">
          <h4 className="cart-item__title">{product.title}</h4>
          <span className="cart-item__quantity">
            Quantity:
            <span>{product.quantity}</span>
          </span>
          {remove &&
            <button
              onClick={() => removeFromCart(product.id)}
              className="cart-item__remove"
            >remove</button>
          }
        </div>
      </div>

      <div className="cart-item__right">
        <p className="cart-item__price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
};
