import React from 'react';

export default function ShippingRates({rates, setSelectedRate}) {
  return (
    <div className="shipping-rates">
    {rates ? rates.map((rate, i) => (
      <div key={i} className="shipping-rates__rate">
        <div className="shipping-rates__left">
        <input 
          type="radio" value={rate.shipment_charge_total.toFixed(2)}
          onClick={() => setSelectedRate(rate.shipment_charge_total)}
        />
          <h5 className="shipping-rates__title">{rate.courier_name}</h5>
          <span className="shipping-rates__text">({rate.min_delivery_time}  to {rate.max_delivery_time} business days)</span>
        </div>

        <div className="shipping-rates__right">
          <p className="shipping-rates__price">${rate.shipment_charge_total.toFixed(2)}</p>
        </div>
      </div>
    )) : <div>Enter Shipping Details for Rates</div>
    }
    </div>
  )
};
