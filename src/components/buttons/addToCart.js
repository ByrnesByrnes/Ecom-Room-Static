import React, { useState } from 'react';
import {StateContext } from '../../context/state'

export default function AddToCart({product, text, svg, quantity=1}) {
  const [message, setMessage] = useState('')
  const [state, dispatch] = StateContext()
  
  const cartID = () => {
    return `_${Math.random().toString(36).substr(2,9)}`
  }

  const addToCart = (id) => {
    if (id === product.id) {
      setMessage('Added!')
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...product,
          price: product.price * quantity,
          cartId: cartID(),
          quantity: quantity 
        }
      })
    } 
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  return (
    <button
      onClick={() => addToCart(product.id)}
      className="add-to-cart">{message || text }{!message && svg}
    </button>
  )
}