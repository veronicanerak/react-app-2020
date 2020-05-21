import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookDetail = ({ match }) => {

    const [state, setState] = useState({ })

    useEffect(() => {
      axios.get(`https://my-json-server.typicode.com/veronicanerak/json-db-data/books/${ match.params.id}`)
      .then(response => setState({
        books: response.data
      }))
    }, [])

    return (
        <div className="ed-grid m-grid-3">
        {
            state.books ? (
                <>
                    <h1 className="m-cols-3">Book title: { state.books.title }</h1>
                    <img className="m-cols-1" src={ state.books.image } alt={ state.books.title } />
                    <p className="m-cols-2">{ state.books.author }</p>                    
                </>
            ) : 
            <h1>Book doesn't exist</h1>
        }
        </div>
    )
}

export default BookDetail