import React from 'react'
import BookCard from '../Molecules/BookCard'
import withLoader from '../HOC/withLoader'

const BookGrid = ({ books }) => (      
    <div className="ed-grid m-grid-4">
        { 
          books.map(book => (
            <BookCard 
              key={book.id} 
              id={book.id} 
              title={book.title} 
              image={book.image}
              price={book.price}  
              author={book.author} 
            />
          ))
        }
      </div>
)

export default withLoader("books", BookGrid)