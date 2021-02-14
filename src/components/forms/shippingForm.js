import React, { useState } from 'react';
// import countryList from 'react-select-country-list' // NO working!



export default function ShippingForm({ results, setResults }) {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: ''
  })

  const handleForm = event => setForm({ ...form, [event.target.name]: event.target.value })

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer prod_jo7LSMBCWPTDefIUPwwoPy5bhYN8f/mA4zIohPGpwh0='
    },
    body: `{
        "origin_postal_code":"L5B2C9", 
        "destination_country_alpha2":"CA",
        "destination_postal_code":"${form.zipcode}",
        "taxes_duties_paid_by":"Sender",
        "is_insured":false,
        "items":
          [
            {
              "quantity":"1",
              "actual_weight":5,
              "height":20,
              "width":20,
              "length":20,
              "category":"mobiles",
              "declared_currency":"CAD",
              "declared_customs_value":45
            }
          ],
            "apply_shipping_rules":true,
            "destination_city":"${form.city}",
            "destination_state":"${form.state}",
            "destination_address_line_1":"${form.address}"}`
  };

  const getShippingRates = async () => {
    try {
      const response = await fetch('https://api.easyship.com/rate/v1/rates', options)
      const data = await response.json()

      setResults(data)

    } catch (error) {
      console.error(error)
    }
  }


  const handleSubmit = event => {
    event.preventDefault()
    getShippingRates()

  }
  console.log(form.state)
  const { firstName, lastName, address, city, country, state, zipcode } = form
  return (
    <form action="" className="shipping-form" onSubmit={handleSubmit}>
      <div className="shipping-form__input-box">
        <span className="shipping-form__label">First name</span>
        <input
          required
          value={firstName}
          onChange={handleForm}
          name="firstName"
          className="shipping-form__input"
          type="text"
        />
      </div>

      <div className="shipping-form__input-box">
        <span className="shipping-form__lab">Last Name</span>
        <input
          required
          value={lastName}
          onChange={handleForm}
          name="lastName"
          className="shipping-form__input"
          type="text"
        />
      </div>
      <div className="shipping-form__address">

        <div className="shipping-form__input-box">
          <span className="shipping-form__lab">Address</span>
          <input
            required
            value={address}
            onChange={handleForm}
            name="address"
            className="shipping-form__input"
            type="text"
          />
        </div>
        <div className="shipping-form__input-box">
          <span className="shipping-form__lab">City</span>
          <input
            required
            value={city}
            onChange={handleForm}
            name="city"
            className="shipping-form__input"
            type="text"
          />
        </div>
        <div className="shipping-form__input-box">
          <span className="shipping-form__lab">Prov</span>
          <select value={state} onChange={handleForm} name="state">
            <option value="ON" className="">Ontario</option>
            <option value="Quebec" className="">Quebec</option>
            <option value="Manitoba" className="">Manitoba</option>
            {/* <option value="Newfoundland" className="">Newfoundland</option>
            <option value="Alberta" className="">Alberta</option>
            <option value="Saskatchewan" className="">Saskatchewan</option>
            <option value="British Columbia" className="">British Columbia</option>
            <option value="New Brunswick" className="">New Brunswick</option> */}
          </select>
        </div>
        <div className="shipping-form__input-box">
          <span className="shipping-form__lab">Zipcode</span>
          <input
            required
            value={zipcode}
            onChange={handleForm}
            name="zipcode"
            className="shipping-form__input"
            type="text"
          />
        </div>
      </div>
      <button className="shipping-form__button" type="submit">Get Rates</button>
    </form>
  )
};
