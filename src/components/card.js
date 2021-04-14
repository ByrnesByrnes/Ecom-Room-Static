import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { AddToCart, Favorite, Modal } from '../components'
// temporary fix when end point was changed
import { fixImageUrl } from '../utils/fixImageUrl'



export default function Card({ product, count, setCount }) {
  
  const [modal, setModal] = useState({
    display: false,
    position: 0,
    zIndex: 0,
  })

  return (
    <div className="card">
      <div className="card__favorite">
        <Favorite product={product} fontSize={"30px"}/>
      </div>
      <Link to={`${ROUTES.BROWSE}/${product.id}`}>
        <div className="card__image">
          <img src={product.image} alt={product.description} />
        </div>
        <h3 className="card__title">{product.title}</h3>
      </Link>

      {/* <p className="card__text">{product.description}</p> */}

      <div className="card__info">
        <p className="card__price">${product.price.toFixed(2)}</p>
        <AddToCart 
          product={product} 
          text={"Quick Add"}
          modal={modal}
          setModal={setModal}
          count={count}
          setCount={setCount}
        />
      </div>
      <Modal product={product} modal={modal}/>
    </div>
  )
}