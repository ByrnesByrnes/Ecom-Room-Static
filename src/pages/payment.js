import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Subtotal } from '../reducers/reducer'
import { StateContext } from '../context/state'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import * as ROUTES from '../constants/routes'

export default function Payment({ cart, shippingAddress, shippingRate }) {
  const [confirm, setConfirm] = useState('')
  const [_, dispatch] = StateContext()
  const [creditCard, setCreditCard] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
    focus: '',
  })

  console.log(cart, shippingAddress)

  const handlePayment = () => {

    dispatch({
      type: "ADD_TO_ORDERS",
      payload: {
        orderId: 234,
        date: Date.now(),
        cart: cart,
      }
    })

    setCreditCard({
      cvc: '',
      expiry: '',
      name: '',
      number: ''
    })
    setConfirm('Thank You for Your Order!')
  }

  const handleFocus = event => {
    setCreditCard({ ...creditCard, focus: event.target.name })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setCreditCard({ ...creditCard, [name]: value })
  }

  const { firstName, lastName, address, city, country, state, zipcode } = shippingAddress
  const { cvc, expiry, name, number, focus } = creditCard

  return (
    <section className="payment">
      <div className="payment__container">

        <div className="payment__left">
          <div className="payment__head">
            <h1 className="payment__title">Payment</h1>
          </div>

          <div className="payment__card">
            <div id="paymentForm">
              <Cards
                cvc={cvc}
                expiry={expiry}
                name={name}
                number={number}
                focused={focus}
              />
              <div className="payment__card-info">
                <input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Full Name"
                />
                <div>
                  <input
                    type="tel"
                    name="expiry"
                    value={expiry}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    placeholder="Expiry"
                  />
                  <input
                    type="tel"
                    name="cvc"
                    value={cvc}
                    onChange={handleChange}
                    placeholder="CVC"
                    onFocus={handleFocus}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="payment__billing-address">
            <p className="payment__text">{firstName} {lastName}</p>
            <p className="payment__text">{address}</p>
            <p className="payment__text">{city}, {state}, {zipcode}</p>
            {/* <p className="payment__text">number maybe</p> */}
          </div>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
        <div className="payment__right">
          <h3 className="payment__subtitle">Order Summary <span></span></h3>
          <p className="payment__text">Product Subtotal ${Subtotal(cart)}</p>
          <p className="payment__text">Estimated Shipping ${shippingRate}</p>
          <p className="payment__text">Estimated Taxes ${(Subtotal(cart) * 0.13).toFixed(2)}</p>
          <p className="payment__text">Estimated Total {(Subtotal(cart) * 1.13 + shippingRate).toFixed(2)}</p>
        </div>
      </div>
      {confirm ? <h4>{confirm} <Link to={ROUTES.ORDERS}>View Your Orders</Link></h4> : ''}
    </section>
  )
}
// shipping information COnfirm
// Products to Confirm
// add credit card infor for payment