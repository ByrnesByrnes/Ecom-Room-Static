import React, { useState } from 'react';
import { StateContext } from '../../context/state'

export default function AddToCart({product, text, svg, quantity=1, modal, setModal, count, setCount={}}) {
  const [message, setMessage] = useState('')
  const [state, dispatch] = StateContext()

  const cartId = () => {
    return `_${Math.random().toString(36).substr(2,9)}`
  }
  
  const addToCart = (id) => {
    if (id === product.id) {
      if(setModal) {
        setCount({
          position: count.position + 1,
          zIndex: count.zIndex + 5
        })
        setModal({
          display: true, 
          position: count.position,
          zIndex: count.zIndex,
        })
        setTimeout(()=> {
          setModal({
            display: false,
            position: modal.position = 0,
            zIndex: modal.zIndex = 0,
          })
        }, 3000 )
  
      }
      
      setMessage('Added!')
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...product,
          cartId: cartId(),
          created: Date.now(),
          price: product.price,
          quantity: quantity, 
        }
      })
   
    } 
    setTimeout(() => {
      setMessage('')
    }, 2000);
    
    if(count) {
      setTimeout(() => {
        setCount({
          position: 0,
          zIndex: 0,
        })
      }, 2000)
    }
    
  }

  return (
    <button
      onClick={() => addToCart(product.id)}
      className="add-to-cart">{message || text }{!message && svg}
    </button>
  )
}