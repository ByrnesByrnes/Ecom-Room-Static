export const state = {
  cart: []
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return state = {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}