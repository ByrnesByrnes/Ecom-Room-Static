import React from 'react';
import { CartItem } from '../components'
import {StateContext} from '../context/state'

export default function Modal({product, modal}) {
  const [state, dispatch] = StateContext()

  const index = state.cart.find(item => (item.id) === product.id)

  return (
    <div 
      style={{ 
          transform : `translate(${modal.display ? '0' : '100%'} ,${50 * modal.position}%)`,
          zIndex: `${100 + modal.zIndex}`
      }}
      className={`modal ${modal.display ? 'open': '' }`}>
      <CartItem product={product} remove={false} quanPrice={index}/>
    </div>
  )
}


