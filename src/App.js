import React from 'react';
import "./styles/styles.scss";
import Book from './Book'
import Banner from './Banner'
import FormCustom from './FormCustom'


const books = [
  {
    "title": "Best book ever",
    "image": "https://jbrary.com/wp-content/uploads/2018/03/the-dress-and-the-girl.jpg",
    "price": "30",
    "author": "June Marine"
  },
  {
    "title": "All stars",
    "image": "https://s26162.pcdn.co/wp-content/uploads/2019/01/9781616208882.jpg",
    "price": "10",
    "author": "Felipes Marine"
  },
  {
    "title": "Welcome to the world",
    "image": "https://3jqywe2zrpyl3iyev92tw7v6-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/the-fault-in-our-stars.jpg",
    "price": "30",
    "author": "June"
  },
  {
    "title": "Dancing in the sunset",
    "image": "https://s3.amazonaws.com/netgalley-covers/cover133358-medium.png",
    "price": "50",
    "author": "Seerich AJers"
  },
]

const App = () => (
  <>
  
  <Banner />
  <FormCustom formName="Contact US" />

  <div className="ed-grid m-grid-3">        

    {
      books.map( book => <Book titlle={book.title} image={book.image} price={book.price} author={book.author} /> )
    }
    
  </div>
  
  </>
)

export default App;
