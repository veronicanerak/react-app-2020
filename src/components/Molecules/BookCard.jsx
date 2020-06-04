import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actionCreators'


const BookCard = ({id, title, image, price, author, addBookToCart, cart, removeBookFromCart}) => (
  <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/books/${id}`}>
          <img src={ image ? image : "https://www.skipprichard.com/wp-content/uploads/2017/12/9781492647966.jpg" } alt={title} />
        </Link>  
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{ title }</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={image} alt={title} />
              </div>
            </div>
            <span className="small">{`author: ${author}`}</span>
          </div>
        </div>
        <div className="s-main-center">
          {
            cart.find( a => a === id)
            ?
            <button 
              className="button--ghost-alert button--tiny"
              onClick= {()=> removeBookFromCart(id)} 
            >Remove from the Cart</button>
            :
            <button 
              className="button--ghost-alert button--tiny"
              onClick= {()=> addBookToCart(id)} 
            >
              { `$ ${price} USD` }
            </button>
          }          
        </div>
      </div>
  </article>
)

BookCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  author: PropTypes.string
}

// Default Values
BookCard.defaultProps = {
  title: "There is no title",
  image: "https://www.skipprichard.com/wp-content/uploads/2017/12/9781492647966.jpg",
  price: "--",
  author: "No author"
}

const mapStateToProps = state => (
  {
    cart: state.cart
  }
)

const mapDispatchToProps = dispatch => ({
  addBookToCart(id) {
    dispatch(addToCart(id))
  },
  removeBookFromCart(id) {
    dispatch(removeFromCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)