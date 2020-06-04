import { createStore } from "redux"
import { ADD_TO_CART } from "./actions"
import { REMOVE_FROM_CART } from "./actions"

const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, action) => {

  if(action.type === ADD_TO_CART) {

    if(state.cart.find( a => a === action.data)) return state
    return {
        ...state,
        cart: state.cart.concat(action.data)
    }
  }

  if(action.type === REMOVE_FROM_CART) {

    return {
        ...state,   
        cart: state.cart.filter(item => item !== action.data)
    }
  }
  return state
}

export default createStore(rootReducer)
