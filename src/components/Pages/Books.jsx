import React from "react"
import BookGrid from '../Organisms/BookGrid'
import { connect } from 'react-redux'

const Books = ({ books }) => <BookGrid books={ books } />

const mapStateToProps = state => ({
    books: state.booksReducer.books
})
  
export default connect(mapStateToProps, {})(Books)