import React, { useState } from 'react';

export default function ShippingForm(params) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: ''
  })
  const sampleKey = 'sand_E/LEM4ewQ5p3kO22mrFfraRP/G190y1L3gMXk+1tupk='

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sampleKey}`
    },
    body: '{"origin_postal_code":"059405","destination_country_alpha2":"US","destination_postal_code":"10030","taxes_duties_paid_by":"Sender","is_insured":false,"apply_shipping_rules":true}'
  };
  
  fetch('https://api.easyship.com/rate/v1/rates', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));

  const handleForm = event => setForm({...form, [event.target.name]: event.target.value})

  console.log(form)
  const {firstName, lastName, address,city,country,state,zipcode} = form

  
  return (
    <form action="" className="shipping">
      <div className="shipping__input-box">
        <span className="shipping__label">First name</span>
        <input
          required
          value={firstName}
          onChange={handleForm}
          name="firstName"
          className="shipping__input"
          type="text" 
        />
      </div>

      <div className="shipping__input-box">
        <span className="shipping__lab">Last Name</span>
        <input
          required
          value={lastName}
          onChange={handleForm}
          name="lastName"
          className="shipping__input"
          type="text" 
        />
      </div>
      <div className="shipping__input-box">
        <span className="shipping__lab">Address</span>
        <input
          required
          value={address}
          onChange={handleForm}
          name="address"
          className="shipping__input"
          type="text" 
        />
      </div>
      <div className="shipping__input-box">
        <span className="shipping__lab">City</span>
        <input
          required
          value={city}
          onChange={handleForm}
          name="city"
          className="shipping__input"
          type="text" 
        />
      </div>
    </form>
  )

};
