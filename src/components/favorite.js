import { useState, useRef } from 'react';
import { StateContext } from '../context/state'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function Favorite({ product, fontSize = "25px" }) {
  const [hovered, setHovered] = useState(false)
  const [state, dispatch] = StateContext()

  const domNode = useRef(null)

  const toggleFavorite = action => {
    dispatch({
      type: action,
      payload: { ...product, favorited: true }
    })
  }

  const isFavorited = state.favorites.find(item => item.favorited && product.id === item.id)

  return (
    <div
      onClick={() => toggleFavorite(!isFavorited ? "ADD_TO_FAVORITES" : "REMOVE_FROM_FAVORITES")}
      className="favorite__heart"
      style={{ fontSize: fontSize }}
    >
      <AiOutlineHeart className="favorite__outline" />
      <AiFillHeart
        className="favorite__fill"
        style={{ opacity: isFavorited ? '1' : '0' }}
      />
    </div>

  )
}