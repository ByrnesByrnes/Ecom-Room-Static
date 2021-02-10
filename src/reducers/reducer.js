const localCart = localStorage.getItem('cart')

export const state = {
  cart: JSON.parse(localCart) || []
}


const setLocalStorage = (state, action=false) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(action ? [...state, action.payload] : [...state])
  )
}

export const Subtotal = (cart) => cart.reduce((accum, item) => accum + item?.price, 0).toFixed(2)


export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      
      setLocalStorage(state.cart, action)

      return state = {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(product => product.id === action.payload)
      const newCart = [...state.cart]
  
      index >= 0 ? newCart.splice(index, 1) : console.error('Product does not exist.')
      
      setLocalStorage(newCart)

      return state = {
        ...state,
        cart: [...newCart]
      }
    default:
      return state
  }
}