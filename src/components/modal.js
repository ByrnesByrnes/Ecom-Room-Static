import React, {useState, useRef, useEffect } from 'react';
import { CartItem } from '../components'


export default function Modal({product, modal}) {


  return (
    <div 
      style={{ 
          transform : `translate(${modal.display ? '0' : '100%'} ,${50 * modal.position}%)`,
          zIndex: `${100 + modal.zIndex}`
      }}
      className={`modal ${modal.display ? 'open': '' }`}>
      <CartItem product={product} remove={false} />
    </div>
  )
}


