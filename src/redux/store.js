import { createStore, combineReducers, applyMiddleware } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART, GET_BOOKS_LIST } from "./actions"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
    cart: []
}

const initialBooks = {
  books: []
}

const cartReducer = (state = initialStore, action) => {

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

const booksReducer = (state = initialBooks, action) => {
  
  if(action.type === GET_BOOKS_LIST) {

    return {
      ...state,
      books: action.data
    }
  }
  return state
}

export default createStore(combineReducers({ cartReducer, booksReducer }), composeWithDevTools(applyMiddleware(thunk)))
