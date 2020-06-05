import React, { Component } from 'react'
import BooksContext from './BooksContext'
import Axios from 'axios'

class BooksProvider extends Component {
  constructor(props) {
      super(props)

      this.state = {
          books: []
      }
  }

  componentDidMount() {
      Axios.get('https://my-json-server.typicode.com/veronicanerak/json-db-data/books')
      .then(resp => this.setState({
          books: resp.data
      }))
  }

  render(){
      return(
          <BooksContext.Provider value={this.state}>
            { this.props.children }
          </BooksContext.Provider>
      )
  }
}

export default BooksProvider