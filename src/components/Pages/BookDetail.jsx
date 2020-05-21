import React, { useState } from 'react'
import useBook from '../customHooks/useBook'

const BookDetail = ({ match }) => {

    // const [state, setState] = useState({ })  By default    
    const [comment, setComment] = useState("No comments")
    const bookState = useBook(match.params.id) //Calling the custom hook

    const setBookComment = e => {
      setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
        {
            bookState.books ? (
                <>
                    <div className="l-block">
                      <h1 className="m-cols-3">Book title: { bookState.books.title }</h1>
                      <img className="m-cols-1" src={ bookState.books.image } alt={ bookState.books.title } />
                      <p className="m-cols-2">Book Author: { bookState.books.author }</p>
                    </div>
                    <div>
                      <h3>Enter your comment:</h3>
                      <input type="text" cols="5" placeholder="Type your comment here..." onChange={ setBookComment.bind(this) }></input>
                      <p>Your comment is: { comment }</p>
                    </div>                   
                </>
            ) : 
            <h1>Book doesn't exist</h1>
        }
        </div>
    )
}

export default BookDetail