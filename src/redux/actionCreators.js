import { ADD_TO_CART, GET_BOOKS_LIST } from "./actions"
import { REMOVE_FROM_CART } from "./actions"
import axios from "axios"

const addToCart = id => (
    {
        type: ADD_TO_CART,
        data: id   
    }
)

const removeFromCart = id => (
    {
        type: REMOVE_FROM_CART,
        data: id
    }
)

const getBooksList = () => dispatch => {
    
    axios.get('https://my-json-server.typicode.com/veronicanerak/json-db-data/books')
    .then(response => {
        return dispatch ({
            type: GET_BOOKS_LIST,
            data: response.data
        })
    })
}

export { addToCart, removeFromCart, getBooksList }