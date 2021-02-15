import React, { useState } from 'react';
import { StateContext } from '../context/state'
import { Subtotal } from '../reducers/reducer'
import { CartItem } from '../components'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { useTransition, animated } from 'react-spring'

export default function Cart({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {
  const [state, dispatch] = StateContext()
  const [refMap] = useState(() => new WeakMap())
  const [cancelMap] = useState(() => new WeakMap())
  // const [items, setItems] = useState([])

  const items  = state.cart

 
  const transitions = useTransition(items, item => item.cartId, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })

  return (
    <section className="cart">
      <div className="cart__content">
        <div className="cart__left">
          <h1 className="cart__title">Shopping Cart</h1>
          {state.cart.length !== 0 ?
            <>
              <div className="cart__headers">
                <h3>Product</h3>
                <h3>Price</h3>
              </div>
              {/* {state.cart.map((product, i) => (
                <CartItem key={i} product={product} />
              ))} */}

              {transitions.map(({ item, key, props }) =>
                <animated.div key={key} style={props}>
                  <CartItem product={item} />
                </animated.div>
              
              )}
            </> : <div className="cart__empty">Your Cart is Empty</div>
          }
        </div>

        <div className="cart__buy-box">
          Subtotal: ${Subtotal(state.cart)}
          <Link to={ROUTES.CHECKOUT} className="cart__checkout">Proceed to Checkout</Link>
        </div>

      </div>
      <div className="cart__total">
        <span>Subtotal: ${Subtotal(state.cart)} </span>
        <Link to={ROUTES.CHECKOUT} className="cart__checkout">Checkout</Link>
      </div>

    </section>
  )
}