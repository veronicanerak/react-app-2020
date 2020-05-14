import React from 'react'
import PropTypes from 'prop-types'

const Book = props => (
  <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={ props.image ? props.image : "https://www.skipprichard.com/wp-content/uploads/2017/12/9781492647966.jpg" } alt={props} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{ props.title }</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={props.image} alt={props.title} />
              </div>
            </div>
            <span className="small">{`author: ${props.author}`}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="http://www.test.com">{`$ ${props.price} USD`}</a>
        </div>
      </div>
  </article>
)

Book.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  author: PropTypes.string
}

// Default Values
Book.defaultProps = {
  title: "There is no title",
  image: "https://www.skipprichard.com/wp-content/uploads/2017/12/9781492647966.jpg",
  price: "--",
  author: "No author"
}

export default Book