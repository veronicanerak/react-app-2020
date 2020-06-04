import { ADD_TO_CART } from "./actions"
import { REMOVE_FROM_CART } from "./actions"

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

export { addToCart, removeFromCart }