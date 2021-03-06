import React, { useRef } from 'react';
import { StateContext } from '../context/state'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'


export default function CartItem({ product, remove = true}) {
  const [state, dispatch] = StateContext()

  const domNode = useRef(()=> {
    const foundMe = state.cart.find(item => item.id === product.id)
    console.log(foundMe)
  })

  const removeFromCart = id => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,     
    })
  }

 
  // const foundMe = state.cart.find(item => item.id === product.id)
  // console.log(foundMe, 'found')

  return (
    <div ref={domNode} className="cart-item">
      <div className="cart-item__left">
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <img className="cart-item__image" src={product.image} alt={product.title} />
      </Link>
        <div className="cart-item__content">
          <h4 className="cart-item__title">{product.title}</h4>
          <span className="cart-item__quantity">
            Quantity:
            <span>{product.quantity || 1}</span>{/* make dynamic */}

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
        <p className="cart-item__price">${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  )
};
