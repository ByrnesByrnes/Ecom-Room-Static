import React, { useState } from 'react';
import { StateContext } from '../context/state'
import { Cart, CartItem, ShippingForm } from '../components'

export default function Checkout(params) {
  const [toggle, setToggle] = useState('')
  const [state, dispatch] = StateContext()



  return (


    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>

      <div 
        style={{
          width: "500px"
        }}
        className="checkout__items">
        {state.cart.map((product, i) => (
          <CartItem key={i} product={product} remove={false} />
        ))}
      </div>

      <ShippingForm />



    </section>
  )

};

