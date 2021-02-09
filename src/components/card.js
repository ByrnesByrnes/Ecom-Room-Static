import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { AddToCart } from '../components'

export default function Card({ product }) {



  return (
    <div className="card">
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <div className="card__image">
          <img src={product.image} alt={product.description} />
        </div>
        <h3 className="card__title">{product.title}</h3>
      </Link>
      
      
      {/* <p className="card__text">{product.description}</p> */}
      <div className="card__info">
        <p className="card__price">${product.price.toFixed(2)}</p>
        <AddToCart product={product} text={"Quick Add"} />
      </div>
    </div>
  )
}