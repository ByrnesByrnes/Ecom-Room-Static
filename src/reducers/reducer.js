const localCart = localStorage.getItem('cart')
const localFavorites = localStorage.getItem('favorites')

export const state = {
  cart: JSON.parse(localCart) || [],
  favorites: JSON.parse(localFavorites) || [],
  wishList: [],
  shippingAddress: {}
}

const setLocalStorage = (state, action = false, position = 'cart') => {
  localStorage.setItem(
    position,
    JSON.stringify(action ? [...state, action.payload] : [...state])
  )
}

export const Subtotal = (cart) => cart.reduce((accum, item) => accum + (item?.price * item?.quantity), 0).toFixed(2)


export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
      
      if (itemIndex === -1) {
        setLocalStorage(state.cart, action)
        console.log(action.payload)
        return state = {
          ...state,
          cart: [...state.cart, action.payload]
        }
      } else {
        state.cart[itemIndex].quantity += parseInt(action.payload.quantity)
      }
   
      setLocalStorage(state.cart)
      return state
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(product => product.id === action.payload)
      const newCart = [...state.cart]

      index >= 0 ? newCart.splice(index, 1) : console.error('Product does not exist.')

      setLocalStorage(newCart)

      return state = {
        ...state,
        cart: [...newCart]
      }
    case "ADD_TO_FAVORITES":
      setLocalStorage(state.favorites, action, 'favorites')
      return state = {
        ...state,
        favorites: [...state.favorites, action.payload]
      }


    case "REMOVE_FROM_FAVORITES":
      const newFavorites = state.favorites.filter(product => product.id !== action.payload.id)
      setLocalStorage(newFavorites, false, 'favorites')
      return state = {
        ...state,
        favorites: [...newFavorites]
      }

    case "SHIPPING_ADDRESS":
      return state = {
        ...state,
        shippingAddress: {...action.payload}
      }
    default:
      return state
  }
}