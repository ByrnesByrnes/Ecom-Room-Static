import React from 'react';

export default function Card({product}) {
  return (
    <div className="card">
      <img className="card__image" src={product.image} alt={product.description}/>
      <h3 className="card__title">{product.title}</h3>
      {/* <p className="card__text">{product.description}</p> */}
      <p className="card__price">{product.price}</p>
    </div>
  )
}