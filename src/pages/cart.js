import React from 'react';
import { StateContext } from '../context/state'
import { Subtotal } from '../reducers/reducer'
import { CartItem } from '../components'

export default function Cart() {
  const [state, dispatch] = StateContext()

  console.log(state)
  return (
    <section className="cart">
      <div className="cart__content">
        <div className="cart__left">
          <h1 className="cart__title">Shopping Cart</h1>
          <div className="cart__headers">
            <h3>Product</h3>
            <h3>Price</h3>
          </div>
          {state.cart.map((product, i) => (
            <CartItem key={i} product={product} />
          ))}
        </div>

        <div className="cart__buy-box">
          total and subtotal
            {Subtotal(state.cart)}
          <button className="cart__checkout">Proceed to Checkout</button>
        </div>
      
      </div>
      <div className="cart__total">
            <span>Subtotal: {Subtotal(state.cart)} </span>
            <button className="cart__checkout">Checkout</button>
      </div>
       
    </section>
  )
}