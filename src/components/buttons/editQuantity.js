import React, { useState } from 'react';
import { StateContext} from '../../context/state'


export default function EditQuantity({product}) {
  const [state, dispatch] = StateContext()

  console.log(state.cart, 'EditQuantity Tab')
  return (
      <input
        style={{
          border: "none",
          fontSize: "1.2rem",
          fontWeight: "600"
        }}
        className="product__quantity"
        value={product.quantity}
        onChange={(event) => 
          dispatch({
            type: 'EDIT_QUANTITY', 
            payload: {
              ...product, 
              quantity: event.target.value >= 1  ? event.target.value : 1}
          })
        }
        type="number"
      />
  )
};

