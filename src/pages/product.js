import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import { Loader } from '../components'
import { StateContext} from '../context/state'
import {GetData} from '../api/getData'

export default function Product() {
  const [ state, dispatch] = StateContext()

  const { id } = useParams()

  const [product, loading] = GetData(id)

  const addToCart = (id) => {
    if (id === product.id) {  
      dispatch({
        type: "ADD_TO_CART",
        payload: product
      })
    }
  }

  return loading ? <Loader /> : (
    <section className="product">
      <div className="product__images">
        <img src={product.image} alt=""/>
      </div>

      <div className="product__content">
        <h1 className="product__title">{product.title}</h1>
        <p className="product__price">{product.price}</p>
        <div>quantity</div>
        <button
          onClick={() => addToCart(product.id)}
          className="product__button"
        >Add to cart <BsArrowRight /></button>
        <p className="product__description">{product.description}</p>
        <div>share socials</div>
      </div>
    </section>
  )
}