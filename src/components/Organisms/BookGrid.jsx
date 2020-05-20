import React from "react"
import BookCard from '../Molecules/BookCard'

const books = [
    {
      "id": 1,
      "title": "Best book ever",
      "image": "https://jbrary.com/wp-content/uploads/2018/03/the-dress-and-the-girl.jpg",
      "price": "30",
      "author": "June Marine"
    },
    {
      "id": 2,
      "title": "All stars",
      "image": "https://s26162.pcdn.co/wp-content/uploads/2019/01/9781616208882.jpg",
      "price": "10",
      "author": "Felipes Marine"
    },
    {
      "id": 3,        
      "title": "Welcome to the world",
      "image": "https://3jqywe2zrpyl3iyev92tw7v6-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/the-fault-in-our-stars.jpg",
      "price": "30",
      "author": "June"
    },
    {
      "id": 4,
      "title": "Dancing in the sunset",
      "image": "https://s3.amazonaws.com/netgalley-covers/cover133358-medium.png",
      "price": "50",
      "author": "Seerich AJers"
    },
  ]

const BookGrid = () => (
    <div className="ed-grid m-grid-4">
        { books.map(book => (
            <BookCard 
              key={book.id} 
              id={book.id} 
              title={book.title} 
              image={book.image}
              price={book.price}  
              author={book.author} 
            />
        )) }
    </div>
)

export default BookGrid