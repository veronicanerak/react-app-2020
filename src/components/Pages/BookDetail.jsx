import React from 'react'

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

const BookDetail = ({ match }) => {

    const currentBook = books.filter(book => book.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            currentBook ? (
                <>
                    <h1 className="m-cols-3">Book title: { currentBook.title }</h1>
                    <img className="m-cols-1" src={ currentBook.image } alt={ currentBook.title } />
                    <p className="m-cols-2">{ currentBook.author }</p>
                </>
            ) : 
            <h1>Book doesn't exist</h1>
        }
        </div>
    )
}

export default BookDetail