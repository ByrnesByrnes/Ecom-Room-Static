import React from 'react';

export default function Payment({cart, shippingAddress}) {

  const shipTo = shippingAddress
  console.log(cart)
  return (
    <section className="payment">
      <div className="payment__container">


        <div className="payment__left">
        <div className="payment__head">
          <h1 className="payment__title">Payment</h1>
          <h3>Review Your Order</h3>
        </div>
        </div>
        <div className="payment__right"></div>
      </div>

    </section>
  )
}
/*
    <section className="checkout">
      <div className="checkout__container">

        <div className="checkout__left">
          <div className="checkout__head">
            <h1 className="checkout__title">Checkout</h1>
            <h3>Getting your Order</h3>
          </div>
          <h3 className="checkout__subtitle">Shipping Information</h3>
          <ShippingForm setResults={setResults} setSelectedRate={setSelectedRate} />

          <div className="checkout__shipping-rates">
            <h3 className="checkout__subtitle">Shipping methods</h3>
            <ShippingRates rates={results.rates} setSelectedRate={setSelectedRate} />
          </div>
        </div>

        <div className="checkout__right">
          <h3 className="checkout__subtitle">Order Summary</h3>
          <div className="checkout__items">
            {state.cart.map((product, i) => (
              <CartItem key={i} product={product} remove={false} />
            ))}
         
            </div>
            </div>
          </div>
          <h3>Continue to Payment</h3>
          <div className="checkout__confirm">
            <div className="checkout__info">
              <p>Confirm everything is correct and proceed to payment.</p>
            </div>
            <div className="checkout__totals">
              <span>
                <span className="checkout__label">Subtotal:</span>
                ${Subtotal(state.cart)}
              </span>
              <span>
                <span className="checkout__label">Shipping:</span>
                {selectedRate ? `$${selectedRate.toFixed(2)}` : "Calculating"}
              </span>
              <span>
                <span className="checkout__label">Taxes:</span>
               ${(Subtotal(state.cart) * 0.13).toFixed(2)}
              </span>
              <span>
                <span className="checkout__label">Total:</span>
              ${(Subtotal(state.cart) * 1.13 + (selectedRate ? selectedRate : 0)).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="checkout__nav">
            <button onClick={() => history.push(ROUTES.CART)}>Back to cart</button>
            <Link to={ROUTES.PAYMENT} className="checkout__continue">Continue</Link>
          </div>
        </section>

*/
// shipping information COnfirm
// Products to Confirm
// add credit card infor for payment