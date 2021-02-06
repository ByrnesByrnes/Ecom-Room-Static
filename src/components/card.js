import React from 'react';
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
export default function Card({product}) {
  return (
    <div className="card">
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <img className="card__image" src={product.image} alt={product.description}/>
        <h3 className="card__title">{product.title}</h3>
      </Link>
      {/* <p className="card__text">{product.description}</p> */}
      <p className="card__price">{product.price}</p>
    </div>
  )
}