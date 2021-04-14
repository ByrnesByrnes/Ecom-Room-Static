import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaPinterestP, FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Loader, AddToCart, Favorite, EditQuantity } from '../components'
import { StateContext } from '../context/state'
import { GetData } from '../api/getData'
import * as ROUTES from '../constants/routes'
// temporary fix when end point was changed
import { fixImageUrl } from '../utils/fixImageUrl';

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const [state, dispatch] = StateContext()

  const { id } = useParams()

  const [product, loading] = GetData(id)
  console.log(product.image)
  return loading ? <Loader /> : (
    <section className="product">
      <div className="product__images">
        <span className="product__favorited"><Favorite product={product} /></span>
        <img src={product.image && product.image} alt={product.title} />
      </div>

      <div className="product__content">
        <h1 className="product__title">{product.title}</h1>
        <p className="product__price">${product.price?.toFixed(2)}</p>

        <div>Quantity:
          <input
            className="product__quantity"
            value={quantity < 1 ? 1 : quantity}
            onChange={(event) => setQuantity(event.target.value)}
            type="number"
          />
        
        </div>
        <AddToCart
          product={product}
          text={"Add to cart"}
          quantity={quantity}
          svg={<BsArrowRight />}
        />
        <p className="product__description">{product.description}</p>
        <div className="product__socials">
          <span>Share: </span>
          <a className="product__social" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://room-static.netlify.app/browse/${product.id}`}><FaFacebookF /></a>
          <a className="product__social" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=https://room-static.netlify.app/browse/${product.id}&text=${product.title}`}><FaTwitter /></a>
          <a className="product__social" target="_blank" rel="noreferrer" href={`https://pinterest.com/pin/create/button/?url=https://room-static.netlify.app/browse/${product.id}&media=&description=${product.title}`}><FaPinterestP /></a>
          <a className="product__social" target="_blank" rel="noreferrer" href={`mailto:myronbyrnes@gmail.com?&subject=room: ${product.title}&text=&body=${product.image}\n${product.description}https://room-static.netlify.app/browse/${product.id}`}><MdEmail /></a>
          <span>Favorited:</span><Favorite product={product} />
        </div>

        <div className="product__arrows">
          <a 
            className={`product__arrow ${parseInt(id) === 1 ? 'disabled' : ''}`}
            href={`${ROUTES.BROWSE}/${product.id - 1}`}
            rel="prev"
          ><BsArrowLeft />Prev Product</a>
          <a
            //Make last Query dynamic
            className={`product__arrow ${parseInt(id) === 20 ? 'disabled' : ''}`}
            href={`${ROUTES.BROWSE}/${product.id + 1}`}
            rel="next"
          >Next Product<BsArrowRight /></a>
        </div>

      </div>
    </section>
  )
}