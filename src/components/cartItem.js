import React, { useRef } from 'react';
import { StateContext } from '../context/state'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { EditQuantity } from '../components'
import {fixImageUrl} from '../utils/fixImageUrl'


export default function CartItem({ product, remove = true, quanPrice={}}) {
  const [state, dispatch] = StateContext()

  const removeFromCart = id => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,     
    })
  }

  return (
    <div className="cart-item">
      <div className="cart-item__left">
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <img className="cart-item__image" src={fixImageUrl(product.image)} alt={product.title} />
      </Link>
        <div className="cart-item__content">
          <h4 className="cart-item__title">{product.title}</h4>
          <span className="cart-item__quantity">
            Quantity:
            {/*<span>{product.quantity || 1}</span> make dynamic */}
            <span><EditQuantity product={product} /></span>
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
        <p className="cart-item__price">${((quanPrice.price || product.price) * (quanPrice.quantity || product.quantity)).toFixed(2)}</p>
      </div>
    </div>
  )
};
