import React from 'react';
import { StateContext } from '../context/state'

export default function Cart() {
  const [state, dispatch] = StateContext()
  
  const removeFromCart = id => {
    console.log('clicked')
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }

  console.log(state)
  return (
    <section className="cart">
      <h1 className="cart__title">Shopping Cart</h1>
      <table className="cart__table">

        <thead className="cart__head">
          <tr className="cart__row">
            <th className="cart__heading">Product</th>
            <th className="cart__heading">Price</th>
            <th className="cart__heading">Quantity</th>
            <th className="cart__heading">Total</th>
          </tr>
        </thead>

        <tbody className="cart__body">
          {state.cart.map((product, i) => (
            <tr key={i} className="cart__product">
              <td className="cart__data">
             
                <img className="cart__image" src={product.image} alt="" />
                <div className="cart__info">
                <h3 className="cart__name">{product.title}</h3>

                <button 
                  onClick={() => removeFromCart(product.id)}
                  className="cart__data"
                >Remove
                </button>
                </div>
           
              </td>
              <td className="cart__data">{product.price}</td>
              <td className="cart__data ">1</td>
              <td className="cart__data">49.99</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="cart__foot">
            <tr className="cart__sum">
              <td className="cart__total">Total</td>
              <td className="cart__total">$100</td>
            </tr>
        </tfoot>
      </table>
    </section>
  )
}