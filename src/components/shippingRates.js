import React from 'react';
import {StateContext} from '../context/state'

export default function ShippingRates({ rates, setSelectedRate, message }) {
  const [state, dispatch] = StateContext()


  return (
    <div className="shipping-rates">
      {message && <div className="shipping-rates__post">{message[0]}</div> }
      {rates ? rates.map((rate, i) => (
        <div 
          // When clicking component radio button should be selected
          // onClick={() => setSelectedRate(rate.shipment_charge_total)}
          key={i} 
          className="shipping-rates__rate"
        >
          <div className="shipping-rates__left">
            <input
              type="radio" name="shipping-rate" value={rate.shipment_charge_total.toFixed(2)}
              onClick={() => {
                setSelectedRate(rate.shipment_charge_total)
                dispatch({
                  type: 'SHIPPING_RATE',
                  payload: rate.shipment_charge_total
                })
              }}
            />
            <div>
              <h4 className="shipping-rates__title">{rate.courier_name}</h4>
              <span className="shipping-rates__text">({rate.min_delivery_time} to {rate.max_delivery_time} business days)</span>
            </div>
          </div>
          <div className="shipping-rates__right">
            <p className="shipping-rates__price">${rate.shipment_charge_total.toFixed(2)}</p>
          </div>
        </div>

      )) : <div className="shipping-rates__post">Enter Shipping Details for Rates</div>
      }
    </div>
  )
};
