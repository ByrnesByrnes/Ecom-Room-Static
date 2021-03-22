import React from 'react';

export default function Orders({orders}) {
  console.log('You have finished!',orders)
  return (
    <section className="orders">
      <h1 className="orders__title">Orders</h1>
      {orders.map(order => (
        <div className="orders__order">
         {order.orderId}
         {order.cart.map((items, i) =>(
           <div key={i} className="orders__order-container">
            <p >{items.title}</p>
           </div>
         ))}
        </div>
      ))}
    </section>
  )
}