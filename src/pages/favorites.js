import React from 'react';
import {StateContext} from '../context/state'
import { AddToCart, addToCart} from '../components'

export default function Favorites() { 
  const [{favorites}, dispatch] = StateContext()
  console.log(favorites)

  return (
    <section className="favorites">
    <h1 className="favorites__section-title">Favorites</h1>
      {favorites.map((product, i) => (
         <div key={i} style={{ width: "800px"}}>
          <h3 className="favorites__title">{product.title}</h3>
          <img style={{ 
            width: " 100px",
            height: "100px",

          }} src={product.image} alt={product.title}/>
          <p className="favorites__description">{product.description}</p>
          <br/>
          <button onClick={() => dispatch({type: 'REMOVE_FROM_FAVORITES', payload: product})}>Remove</button>
          <AddToCart product={product} text="Add to Cart" />
         </div>
      ))}
    </section>
  )
};
