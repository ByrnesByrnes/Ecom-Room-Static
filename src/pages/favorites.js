import React from 'react';
import {StateContext} from '../context/state'

export default function Favorites() { 
  const [{favorites}, dispatch] = StateContext()
  console.log(favorites)
  return (
    <section className="favorites">
    <h1 className="favorites__section-title">Favorites</h1>
      {favorites.map((item, i) => (
         <div key={i}>
          <h3 className="favorites__title">{item.title}</h3>
          <p className="favorites__description"></p>
          <button onClick={() => dispatch({type: 'REMOVE_FROM_FAVORITES', payload: item})}>Remove</button>
          <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: item})}>Add to Cart</button>
         </div>
      ))}
    </section>
  )
};
