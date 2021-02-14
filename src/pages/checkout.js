import React, { useState } from 'react';
import { StateContext } from '../context/state'
import { Cart, CartItem, ShippingForm, ShippingRates } from '../components'
import { Subtotal } from '../reducers/reducer'

export default function Checkout(params) {
  const [selectedRate, setSelectedRate] = useState('')
  const [toggle, setToggle] = useState('')
  const [state, dispatch] = StateContext()
  const [results, setResults] = useState({})
  console.log(selectedRate)
  console.log(results.rates)
  return (


    <section className="checkout">
      <div className="checkout__container">

        <div className="checkout__left">
          <div className="checkout__head">
            <h1 className="checkout__title">Checkout</h1>
            <h3>Getting your Order</h3>
          </div>
          <h3 className="checkout__subtitle">Shipping Information</h3>
          <ShippingForm setResults={setResults} setSelectedRate={setSelectedRate}/>

          <div className="checkout__shipping-rates">
            <h3 className="checkout__subtitle">Shipping methods</h3>
            <ShippingRates rates={results.rates} setSelectedRate={setSelectedRate}/>
          </div>


        </div>


        <div
          
          className="checkout__right">
          <h3 className="checkout__subtitle">Order Summary</h3>
          <div className="checkout__items">
            {state.cart.map((product, i) => (
              <CartItem key={i} product={product} remove={false} />
            ))}
            <div className="checkout__totals">
              <span>Subtotal: ${Subtotal(state.cart)}</span>
              <span>Shipping: {selectedRate ? `$${selectedRate.toFixed(2)}` : "Calculating"}</span>
       
              <span>Taxes: ${(Subtotal(state.cart) * 0.13).toFixed(2)}</span>
              <span>Total: ${(Subtotal(state.cart) * 1.13 + (selectedRate ? selectedRate : 0)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      

      

    </section>
  )

};

