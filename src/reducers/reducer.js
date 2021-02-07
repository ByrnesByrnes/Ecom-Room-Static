export const state = {
  cart: []
}


export const Subtotal = (cart) => cart.reduce((accum, item) => accum + item.price, 0)


export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return state = {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(product => product.id === action.payload)
      const newCart = [...state.cart]
  
      index >= 0 ? newCart.splice(index, 1) : console.error('Product does not exist.')
      return state = {
        ...state,
        cart: [...newCart]
      }
    default:
      return state
  }
}